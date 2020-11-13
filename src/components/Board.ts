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
    let shape = piece.getShape()
    let px = piece.getPosX();
    let py = piece.getPosY();

    for(let i=0; i<shape.length; i++){
      px = piece.getPosX();
      for(let j=0; j<shape[i].length; j++){
        if(shape[i][j]!==0){
          this.board[px][py] = shape[i][j];
        }
        px++;
      }
      py++;
    }
  }

  public hasCollision = (piece:Piece, nextX=0, nextY=0): boolean => {
    const shape = piece.getShape();
    const offsetX = piece.getPosX()+nextX;
    const offsetY = piece.getPosY()+nextY;

    //console.table(this.board);

    for(let i=0; i<shape.length; i++){
      for(let j=0; j<shape[i].length; j++){
        if( shape[i][j]!==0 && ( this.board[offsetX+i] && this.board[offsetX+j][offsetY+i] !== 0) ){
          return true;
        }
      }
    }

    return false;
  }

}