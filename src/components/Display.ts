'use strict'
import View from './View';
import Game from './Game';
import Piece from './Piece';

export default class Display extends View {
  private game: Game;
  private ctx: CanvasRenderingContext2D;

  constructor(game: Game){
    super();
    this.game = game;
    const canvas:any = document.getElementById("display");
    this.ctx = canvas.getContext("2d");
  }

  public clearBoard = () => {
    this.ctx.clearRect(0, 0, 500, 1000);
  }

  public paintBoard = (board:any) => {
    for(let i=0; i<10; i++){
      for(let j=0; j<20; j++){
        this.fillSquare(i, j, this.color(board[i][j]).blocked );
      }
    }
  }

  public paintPiece = (piece:Piece) => {
    let shape = piece.getShape();
    let px = piece.getPosX();
    let py = piece.getPosY();

    for(let j=0; j<shape.length; j++){
      let row = shape[j]
      px = piece.getPosX();
      for(let i=0; i<row.length; i++){
        if(row[i] > 0){
          this.fillSquare(px, py, this.color(row[i]).active)
        }
        px++;
      }
      py++;
    }
  }

  private fillSquare = (posX:number, posY:number, fillColor = "tomato", borderColor="#666666") => {
    this.ctx.beginPath();
    this.ctx.fillStyle = fillColor;
    this.ctx.fillRect(posX*50, posY*50, 50, 50);
    this.ctx.strokeStyle = borderColor;
    this.ctx.lineWidth = 2;
    this.ctx.strokeRect(posX*50, posY*50, 50, 50);
    this.ctx.stroke();
  }

}