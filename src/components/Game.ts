'use strict';
import Board from './Board';

export default class Game{
  board: Board;

  constructor(){
    console.log("new game");
    this.board = new Board(this);
  }

  test = () => {
    console.log('test from game')
  }


}
