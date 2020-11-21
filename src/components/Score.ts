"use strict";
import View from "./View";
import Game from "./Game";
import Piece from "./Piece";

export default class Score {
  private lines: number = 0;
  private points: number = 0;
  private level: number = 0;

  private counterLines: any;
  private counterLevel: any;
  private counterPoints: any;

  constructor() {
    this.counterLines = document.querySelector("#counter-lines");
    this.counterLevel = document.querySelector("#counter-level");
    this.counterPoints = document.querySelector("#counter-points");
  }

  public reset = () => {
    this.lines = 0;
    this.points = 0;

    this.setLines(0);
    this.chechLevel();
  };

  public getLines = () => {
    return this.lines;
  };

  public getLevel = () => {
    return this.level;
  };

  public chechLevel = () => {
    this.level = Math.floor(this.lines / 10);
    this.counterLevel.innerHTML = this.level + 1;
  };

  public checkPoints = (lines: number) => {
    if (lines == 1) {
      this.points += (this.level + 1) * 40;
    }
    if (lines == 2) {
      this.points += (this.level + 1) * 100;
    }
    if (lines == 3) {
      this.points += (this.level + 1) * 300;
    }
    if (lines == 4) {
      this.points += (this.level + 1) * 1200;
    }
    this.counterPoints.innerHTML = this.points;
  };

  public setLines = (successLines: number) => {
    this.lines += successLines;
    this.chechLevel();
    this.checkPoints(successLines);
    this.counterLines.innerHTML = this.lines;
  };
}
