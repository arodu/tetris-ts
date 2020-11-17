"use strict";
import Display from "./Display";
import Board from "./Board";
import Piece from "./Piece";
import Score from "./Score";
//import Hammer from "Hammer";

export default class Game {
  private display: Display;
  private board: Board;
  private score: Score;
  private lastTime: number = 0;
  private dropInterval: number = 1000;
  private dropCounter: number = 0;

  private currentPiece: Piece;
  private nextPiece: Piece | undefined;
  private holdPiece: Piece | undefined;
  public debug: boolean = false;
  private animationFrame: any = null;

  private level = 0;

  constructor() {
    this.display = new Display(this);
    this.board = new Board();
    this.currentPiece = new Piece();
    this.score = new Score();
    this.actionListeners();
  }

  public start = () => {
    this.board.init();
    this.score.reset();
    this.currentPiece = new Piece(null, 4, -2);
    this.nextPiece = new Piece();

    this.loodGame();
  };

  public loodGame = (time: number = 0) => {
    let deltaTime = time - this.lastTime;
    this.lastTime = time;
    this.dropCounter += deltaTime;
    if (this.dropCounter > this.dropInterval) {
      this.stepDown();
      this.dropCounter = 0;
    }

    this.display
      .clearBoard()
      .paintBoard(this.board.getBoard())
      .paintPiece(this.currentPiece);

    this.animationFrame = requestAnimationFrame(this.loodGame);
  };

  public stepDown = (fast: boolean = false) => {
    if (!this.board.hasCollision(this.currentPiece, 0, 1)) {
      this.currentPiece.updatePosY();
      if (fast) {
        this.stepDown(fast);
      }
    } else {
      this.board.keepPiece(this.currentPiece);
      this.score.setLines(this.board.checkLines());
      this.checkLevel();
      this.currentPiece = new Piece(null, 4, -2);
      if (this.board.hasCollision(this.currentPiece)) {
        alert("Game Over!");
        window.cancelAnimationFrame(this.animationFrame);
        this.start();
      }
    }
  };

  public checkLevel = () => {
    let level = this.score.getLevel();
    this.dropInterval = 1000 - level * 100;
  };

  public moveX = (direction: number) => {
    if (!this.board.hasCollision(this.currentPiece, direction, 0)) {
      this.currentPiece.updatePosX(direction);
    }
  };

  public rotate = () => {
    this.currentPiece.rotate();
    if (this.board.hasCollision(this.currentPiece)) {
      this.currentPiece.reverseRotate();
    }
  };

  public actionListeners = () => {
    document.addEventListener("keydown", (event) => {
      switch (event.code) {
        case "ArrowLeft":
          this.moveX(-1);
          break;
        case "ArrowRight":
          this.moveX(+1);
          break;
        case "ArrowDown":
          this.stepDown(false);
          break;
        case "ArrowUp":
          this.rotate();
          break;
        case "Space":
          this.stepDown(true);
          break;
      }
    });

    var mc = new Hammer(window.document.body);
    mc.get("pan").set({ direction: Hammer.DIRECTION_ALL });
    mc.on("panleft panright panup pandown tap press", (ev) => {
      switch (ev.type) {
        case "panleft":
          this.moveX(-1);
          break;
        case "panright":
          this.moveX(+1);
          break;
        case "pandown":
          this.stepDown(false);
          break;
        case "tap":
          this.rotate();
          break;
        case "panup":
          //this.stepDown(true);
          break;
      }

      //console.log(ev.type + " gesture detected.");
    });
  };
}
