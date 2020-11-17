"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("./css/styles.scss");
const Game_1 = __importDefault(require("./components/Game"));
let game = new Game_1.default();
game.start();
//const mensaje = 'Hola Mundo! probando de nuevo';
//
//console.log( mensaje );
