'use strict';
import Display from './Display';
import Board from './Board';
import Piece from './Piece';

export default class Game{
  private display: Display;
  private board: Board;
  private lastTime:number=0;
  private dropInterval:number = 1000;
  private dropCounter:number = 0;

  private currentPiece:Piece;

  constructor(){
    this.display = new Display(this);
    this.board = new Board();

    this.currentPiece = Piece.newPiece();
  }

  public start = () => {
    this.board.init()
    this.currentPiece = Piece.newPiece().setPosX(4).setPosY(-2);

    
    //this.currentPiece.setPosX(4).setPosY(-2);
    //this.display.paintPiece(this.currentPiece);

    this.loodGame(0);
  }

  public loodGame = (time:number = 0) => {
    let deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.dropCounter += deltaTime;
    if(this.dropCounter > this.dropInterval){
      this.stepDown();
      this.dropCounter = 0;
    }

    this.display.clearBoard()
    this.display.paintBoard(this.board.getBoard());
    this.display.paintPiece(this.currentPiece);
  
    requestAnimationFrame(this.loodGame)
  }

  public stepDown = () => {
    this.board.hasCollision(this.currentPiece);
    //if(hasCollisionY()){
    //  keepPiece();
    //}else{
    this.currentPiece.setPosY(this.currentPiece.getPosY() + 1);
    //}
  }


}
