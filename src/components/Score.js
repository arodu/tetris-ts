"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Score {
    constructor() {
        this.lines = 0;
        this.points = 0;
        this.level = 0;
        this.levelLines = 0;
        this.reset = () => {
            this.lines = 0;
            this.points = 0;
            this.setLines(0);
            this.chechLevel();
        };
        this.getLines = () => {
            return this.lines;
        };
        this.getLevel = () => {
            return this.level;
        };
        this.chechLevel = () => {
            if (this.levelLines >= 10) {
                this.level++;
                this.levelLines = 0;
            }
            this.counterLevel.innerHTML = this.level + 1;
        };
        this.setLines = (successLines) => {
            this.lines += successLines;
            this.levelLines += successLines;
            this.chechLevel();
            this.counterLines.innerHTML = this.lines;
        };
        this.counterLines = document.querySelector("#counter-lines");
        this.counterLevel = document.querySelector("#counter-level");
    }
}
exports.default = Score;
