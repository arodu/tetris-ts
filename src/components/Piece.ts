'use strict'

export default class Piece{
  private shape:number[][] = [];
  private posX:number = 0;
  private posY:number = 0;

  private constructor(shape:number[][], posX:number=0, posY:number=0) {
    this.shape = shape;
    this.posX = posX;
    this.posY = posY;
  }

  public setPosX = (posX:number):Piece => {
    this.posX = posX;
    return this;
  }

  public setPosY = (posY:number):Piece => {
    this.posY = posY;
    return this;
  }

  // direction = left|right
  public rotate = (direction:string = 'left'):Piece => { 
    if(direction == 'left'){
      // rotate shape left
    }else if(direction == 'right'){
      // rotate shape right
    }
    return this;
  }

  public getShape = ():number[][] => {
    return this.shape;
  }

  public getPosX = ():number => {
    return this.posX;
  }

  public getPosY = ():number => {
    return this.posY;
  }

  public static newPiece = (id:number|null=null) => {
    const shapes:any = {
      1: [[0,0,0],[1,1,1],[0,1,0]],                 // T
      2: [[0,2,0],[0,2,0],[0,2,2]],                 // L
      3: [[0,3,0],[0,3,0],[3,3,0]],                 // J
      4: [[4,4],[4,4]],                             // O
      5: [[0,0,0],[5,5,0],[0,5,5]],                 // Z
      6: [[0,0,0],[0,6,6],[6,6,0]],                 // S
      7: [[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0]], // I
    }
    
    if(id == null){
      id = Math.floor(Math.random() * 7) + 1; // ramdom id
    }

    return new Piece(shapes[id]);
  }

}

