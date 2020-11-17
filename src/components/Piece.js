'use strict';
Object.defineProperty(exports, "__esModule", { value: true });
class Piece {
    constructor(id = null, posX = 0, posY = 0) {
        this.shape = [];
        this.posX = 0;
        this.posY = 0;
        this._shapes = {
            1: [[0, 0, 0], [1, 1, 1], [0, 1, 0]],
            2: [[0, 2, 0], [0, 2, 0], [0, 2, 2]],
            3: [[0, 3, 0], [0, 3, 0], [3, 3, 0]],
            4: [[4, 4], [4, 4]],
            5: [[0, 0, 0], [5, 5, 0], [0, 5, 5]],
            6: [[0, 0, 0], [0, 6, 6], [6, 6, 0]],
            7: [[0, 7, 0, 0], [0, 7, 0, 0], [0, 7, 0, 0], [0, 7, 0, 0]],
        };
        this.setPosX = (posX) => {
            this.posX = posX;
            return this;
        };
        this.setPosY = (posY) => {
            this.posY = posY;
            return this;
        };
        this.rotate = () => {
            for (let j = 0; j < this.shape.length; j++) {
                for (let i = 0; i < j; i++) {
                    [this.shape[i][j], this.shape[j][i]] = [this.shape[j][i], this.shape[i][j]];
                }
            }
            for (let i = 0; i < this.shape.length; i++) {
                this.shape[i] = this.shape[i].reverse();
            }
            return this;
        };
        this.reverseRotate = () => {
            this.rotate();
            this.rotate();
            this.rotate();
            return this;
        };
        this.getShape = () => {
            return this.shape;
        };
        this.getPosX = () => {
            return this.posX;
        };
        this.getPosY = () => {
            return this.posY;
        };
        this.updatePosX = (direction) => {
            if (direction >= 0) {
                this.posX++;
            }
            else {
                this.posX--;
            }
        };
        this.updatePosY = () => {
            this.posY++;
        };
        if (id == null) {
            id = Math.floor(Math.random() * 7) + 1; // ramdom id
        }
        this.shape = this._shapes[id];
        this.posX = posX;
        this.posY = posY;
    }
}
exports.default = Piece;
