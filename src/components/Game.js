"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Display_1 = __importDefault(require("./Display"));
const Board_1 = __importDefault(require("./Board"));
const Piece_1 = __importDefault(require("./Piece"));
const Score_1 = __importDefault(require("./Score"));
const Hammer_1 = __importDefault(require("Hammer"));
class Game {
    constructor() {
        this.lastTime = 0;
        this.dropInterval = 1000;
        this.dropCounter = 0;
        this.debug = false;
        this.animationFrame = null;
        this.level = 0;
        this.start = () => {
            this.board.init();
            this.score.reset();
            this.currentPiece = new Piece_1.default(null, 4, -2);
            this.nextPiece = new Piece_1.default();
            this.loodGame();
        };
        this.loodGame = (time = 0) => {
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
        this.stepDown = (fast = false) => {
            if (!this.board.hasCollision(this.currentPiece, 0, 1)) {
                this.currentPiece.updatePosY();
                if (fast) {
                    this.stepDown(fast);
                }
            }
            else {
                this.board.keepPiece(this.currentPiece);
                this.score.setLines(this.board.checkLines());
                this.checkLevel();
                this.currentPiece = new Piece_1.default(null, 4, -2);
                if (this.board.hasCollision(this.currentPiece)) {
                    alert("Game Over!");
                    window.cancelAnimationFrame(this.animationFrame);
                    this.start();
                }
            }
        };
        this.checkLevel = () => {
            let level = this.score.getLevel();
            this.dropInterval = 1000 - level * 100;
        };
        this.moveX = (direction) => {
            if (!this.board.hasCollision(this.currentPiece, direction, 0)) {
                this.currentPiece.updatePosX(direction);
            }
        };
        this.rotate = () => {
            this.currentPiece.rotate();
            if (this.board.hasCollision(this.currentPiece)) {
                this.currentPiece.reverseRotate();
            }
        };
        this.actionListeners = () => {
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
            var mc = new Hammer_1.default(document);
            mc.get("pan").set({ direction: Hammer_1.default.DIRECTION_ALL });
            mc.on("panleft panright panup pandown tap press", function (ev) {
                myElement.textContent = ev.type + " gesture detected.";
            });
        };
        this.display = new Display_1.default(this);
        this.board = new Board_1.default();
        this.currentPiece = new Piece_1.default();
        this.score = new Score_1.default();
        this.actionListeners();
    }
}
exports.default = Game;
