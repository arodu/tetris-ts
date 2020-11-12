'use strict';
import Display from './Display';
import Board from './Board';
import Piece from './Piece';

export default class Game{
  display: Display;
  board: Board;

  constructor(){
    this.display = new Display(this);
    this.board = new Board();
  }

  start = () => {
    this.board.init()
    this.display.paintBoard(this.board.getBoard());

    let currentPiece = Piece.newPiece(1);
    currentPiece.setPosX(4).setPosY(5);
    this.display.paintPiece(currentPiece);

    currentPiece = Piece.newPiece(6);
    currentPiece.setPosX(5).setPosY(6);
    this.display.paintPiece(currentPiece);
  }


}
