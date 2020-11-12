'use strict';
import Piece from './Piece';


export default class Board{
  private board:number[][] = [];

  constructor(){
    this.init();
  }

  public init = () => {
    this.board = new Array(10)
    for(let i=0; i<10; i++){
      this.board[i] = new Array(20)
      for(let j=0; j<20; j++){
        this.board[i][j] = 0;
      }
    }
  }

  public getBoard = () => {
    return this.board;
  }

  public keepPiece = (piece:Piece) => {
    

    return true;
  }

  public hasCollision = (piece:Piece):boolean => {

    
    return false;
  }

}