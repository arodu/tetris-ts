'use strict'
import Game from './Game';

export default class Board{
  game: Game;

  constructor(game: Game){
    console.log("new board")
    this.game = game;
  }

  test = () => {
    console.log('test from board')
  }

}