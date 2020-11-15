'use strict'
import View from './View';
import Game from './Game';
import Piece from './Piece';

export default class Score {
  private lines:number=0;
  private points:number=0;
  private level:number=0;

  private counterLines:any;

  constructor(){
    this.counterLines = document.querySelector('#counter-lines');
  }

  public reset = () => {
    this.lines = 0;
    this.points = 0;
    this.level = 0;

    this.updateLines(0)
  }

  public updateLines = (successLines:number) => {
    this.lines += successLines;
    this.counterLines.innerHTML = this.lines;
  }



}