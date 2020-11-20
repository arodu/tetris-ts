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

  constructor() {
    this.counterLines = document.querySelector("#counter-lines");
    this.counterLevel = document.querySelector("#counter-level");
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

  public setLines = (successLines: number) => {
    this.lines += successLines;
    this.chechLevel();
    this.counterLines.innerHTML = this.lines;
  };
}
