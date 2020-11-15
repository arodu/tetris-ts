'use strict';
import Piece from './Piece';


export default class Board{
  private board:number[][] = [];
  private boardHeight:number = 20;
  private boardWidth:number = 10;

  constructor(){
    this.init();
  }

  public init = () => {
    this.board = new Array(10)
    for(let i = 0; i < this.boardWidth; i++){
      this.board[i] = new Array(20)
      for(let j = 0; j < this.boardHeight; j++){
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

      for(let x=0; x<shape.length; x++){
        for(let y=0; y<shape[x].length; y++){

          if( shape[y][x] > 0){
            if(offsetY+y >= this.boardHeight){
              return true;
            }
            if(offsetX+x < 0 || offsetX+x >= this.boardWidth){
              return true;
            }
            if(this.board[offsetX+x][offsetY+y] > 0){
              return true;
            }
          }

        }
      }

      return false;
  }

  public checkLines = ():number => {
    let totalLines = 0;

    for(let y = (this.boardHeight-1); y >= 0; --y){
      let successLine = true;
      for(let x=0; x < this.boardWidth; x++){
        if( this.board[x][y] == 0){
          successLine = false;
          break;
        }
      }
      if(successLine){
        this.removeLines(y);
        y++;
        totalLines++;
        if(totalLines >= 4){
          break;
        }
      }
    }
    

    return totalLines;
  }

  private removeLines = (line:number) => {
      for(let y=line; y > 0; --y){
        for(let x=0; x < this.boardWidth; x++){
          this.board[x][y] = this.board[x][y-1];
        }
      }
      for(let x=0; x < this.boardWidth; x++){
          this.board[x][0] = 0;
      }
  }

}