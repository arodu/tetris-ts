'use strict';
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const View_1 = __importDefault(require("./View"));
class Display extends View_1.default {
    constructor(game) {
        super();
        this.clearBoard = () => {
            this.ctx.clearRect(0, 0, 500, 1000);
            return this;
        };
        this.paintBoard = (board) => {
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 20; j++) {
                    this.fillSquare(i, j, this.color(board[i][j]).blocked);
                }
            }
            return this;
        };
        this.paintPiece = (piece) => {
            let shape = piece.getShape();
            let px = piece.getPosX();
            let py = piece.getPosY();
            for (let j = 0; j < shape.length; j++) {
                let row = shape[j];
                px = piece.getPosX();
                for (let i = 0; i < row.length; i++) {
                    if (row[i] > 0) {
                        this.fillSquare(px, py, this.color(row[i]).active);
                    }
                    px++;
                }
                py++;
            }
            return this;
        };
        this.fillSquare = (posX, posY, fillColor = "tomato", borderColor = "#666666") => {
            this.ctx.beginPath();
            this.ctx.fillStyle = fillColor;
            this.ctx.fillRect(posX * 50, posY * 50, 50, 50);
            this.ctx.strokeStyle = borderColor;
            this.ctx.lineWidth = 3;
            this.ctx.strokeRect(posX * 50, posY * 50, 50, 50);
            this.ctx.stroke();
            if (this.game.debug) {
                this.ctx.fillStyle = "white";
                this.ctx.font = "12px currier";
                this.ctx.fillText(`${posX},${posY}`, (posX * 50) + 5, (posY * 50) + 15);
            }
        };
        this.game = game;
        const canvas = document.getElementById("display");
        this.ctx = canvas.getContext("2d");
    }
}
exports.default = Display;
