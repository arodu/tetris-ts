(function(a){function b(d){if(c[d])return c[d].exports;var e=c[d]={i:d,l:!1,exports:{}};return a[d].call(e.exports,e,e.exports,b),e.l=!0,e.exports}var c={};return b.m=a,b.c=c,b.d=function(a,c,d){b.o(a,c)||Object.defineProperty(a,c,{enumerable:!0,get:d})},b.r=function(a){'undefined'!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(a,Symbol.toStringTag,{value:'Module'}),Object.defineProperty(a,'__esModule',{value:!0})},b.t=function(a,c){if(1&c&&(a=b(a)),8&c)return a;if(4&c&&'object'==typeof a&&a&&a.__esModule)return a;var d=Object.create(null);if(b.r(d),Object.defineProperty(d,'default',{enumerable:!0,value:a}),2&c&&'string'!=typeof a)for(var e in a)b.d(d,e,function(b){return a[b]}.bind(null,e));return d},b.n=function(a){var c=a&&a.__esModule?function(){return a['default']}:function(){return a};return b.d(c,'a',c),c},b.o=function(a,b){return Object.prototype.hasOwnProperty.call(a,b)},b.p='',b(b.s=0)})([function(a,b,c){'use strict';var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,'__esModule',{value:!0}),c(1);const e=d(c(2));let f=new e.default;f.start()},function(){},function(a,b,c){'use strict';var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,'__esModule',{value:!0});const e=d(c(3)),f=d(c(5)),g=d(c(6)),h=d(c(7));b.default=class{constructor(){this.lastTime=0,this.dropInterval=1e3,this.dropCounter=0,this.debug=!1,this.animationFrame=null,this.distance=0,this.level=0,this.start=()=>{this.board.init(),this.score.reset(),this.currentPiece=new g.default(null,4,-2),this.nextPiece=new g.default,this.loodGame()},this.loodGame=(a=0)=>{let b=a-this.lastTime;this.lastTime=a,this.dropCounter+=b,this.dropCounter>this.dropInterval&&(this.stepDown(),this.dropCounter=0),this.display.clearBoard().paintBoard(this.board.getBoard()).paintPiece(this.currentPiece),this.animationFrame=requestAnimationFrame(this.loodGame)},this.stepDown=(a=!1)=>{this.board.hasCollision(this.currentPiece,0,1)?(this.board.keepPiece(this.currentPiece),this.score.setLines(this.board.checkLines()),this.checkLevel(),this.currentPiece=new g.default(null,4,-2),this.board.hasCollision(this.currentPiece)&&(alert('Game Over!'),window.cancelAnimationFrame(this.animationFrame),this.start())):(this.currentPiece.updatePosY(),a&&this.stepDown(a))},this.checkLevel=()=>{let a=this.score.getLevel();this.dropInterval=1e3-100*a},this.moveX=(a)=>{this.board.hasCollision(this.currentPiece,a,0)||this.currentPiece.updatePosX(a)},this.rotate=()=>{this.currentPiece.rotate(),this.board.hasCollision(this.currentPiece)&&this.currentPiece.reverseRotate()},this.checkDistance=(a)=>{this.distance++;this.distance>2&&(console.log(this.distance),a(),this.distance=0)},this.actionListeners=()=>{document.addEventListener('keydown',(a)=>{switch(a.code){case'ArrowLeft':this.moveX(-1);break;case'ArrowRight':this.moveX(1);break;case'ArrowDown':this.stepDown(!1);break;case'ArrowUp':this.rotate();break;case'Space':this.stepDown(!0);}});var a=new Hammer(window.document.body);a.get('pan').set({direction:Hammer.DIRECTION_ALL,threshold:5}),a.get('swipe').set({direction:Hammer.DIRECTION_VERTICAL}),a.on('panleft panright tap swipedown panend',(a)=>{switch(a.type){case'panleft':this.checkDistance(()=>this.moveX(-1));break;case'panright':this.checkDistance(()=>this.moveX(1));break;case'panend':this.distance=0;break;case'doubletap':this.checkDistance(()=>this.stepDown(!1));break;case'tap':this.rotate();break;case'swipedown':this.stepDown(!0);}})},this.display=new e.default(this),this.board=new f.default,this.currentPiece=new g.default,this.score=new h.default,this.actionListeners()}}},function(a,b,c){'use strict';var d=this&&this.__importDefault||function(a){return a&&a.__esModule?a:{default:a}};Object.defineProperty(b,'__esModule',{value:!0});const e=d(c(4));class f extends e.default{constructor(a){super(),this.clearBoard=()=>(this.ctx.clearRect(0,0,500,1e3),this),this.paintBoard=(a)=>{for(let b=0;10>b;b++)for(let c=0;20>c;c++)this.fillSquare(b,c,this.color(a[b][c]).blocked);return this},this.paintPiece=(a)=>{let b=a.getShape(),c=a.getPosX(),d=a.getPosY();for(let e,f=0;f<b.length;f++){e=b[f],c=a.getPosX();for(let a=0;a<e.length;a++)0<e[a]&&this.fillSquare(c,d,this.color(e[a]).active),c++;d++}return this},this.fillSquare=(a,b,c='tomato',d='#666666')=>{this.ctx.beginPath(),this.ctx.fillStyle=c,this.ctx.fillRect(50*a,50*b,50,50),this.ctx.strokeStyle=d,this.ctx.lineWidth=3,this.ctx.strokeRect(50*a,50*b,50,50),this.ctx.stroke(),this.game.debug&&(this.ctx.fillStyle='white',this.ctx.font='12px currier',this.ctx.fillText(`${a},${b}`,50*a+5,50*b+15))},this.game=a;const b=document.getElementById('display');this.ctx=b.getContext('2d')}}b.default=f},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});b.default=class{constructor(){this.color=(a)=>{return{0:{blocked:'#666666'},1:{active:'#AA00FF',blocked:'rgba(170,0,255,.6)'},2:{active:'#FFA500',blocked:'rgba(255,165,0,.6)'},3:{active:'#0000FF',blocked:'rgba(0,0,255,.6)'},4:{active:'#FFFF00',blocked:'rgba(255,255,0,.6)'},5:{active:'#00FF00',blocked:'rgba(0,255,0,.6)'},6:{active:'#FF0000',blocked:'rgba(255,0,0,.6)'},7:{active:'#00FFFF',blocked:'rgba(0,255,255,.6)'}}[a]}}}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});b.default=class{constructor(){this.board=[],this.boardHeight=20,this.boardWidth=10,this.init=()=>{this.board=Array(10);for(let a=0;a<this.boardWidth;a++){this.board[a]=Array(20);for(let b=0;b<this.boardHeight;b++)this.board[a][b]=0}},this.getBoard=()=>this.board,this.keepPiece=(a)=>{let b=a.getShape(),c=a.getPosX(),d=a.getPosY();for(let e=0;e<b.length;e++){c=a.getPosX();for(let a=0;a<b[e].length;a++)0!==b[e][a]&&(this.board[c][d]=b[e][a]),c++;d++}},this.hasCollision=(a,b=0,c=0)=>{const d=a.getShape(),e=a.getPosX()+b,f=a.getPosY()+c;for(let g=0;g<d.length;g++)for(let a=0;a<d[g].length;a++)if(0<d[a][g]){if(f+a>=this.boardHeight)return!0;if(0>e+g||e+g>=this.boardWidth)return!0;if(0<this.board[e+g][f+a])return!0}return!1},this.checkLines=()=>{let a=0;for(let b,c=this.boardHeight-1;0<=c;--c){b=!0;for(let a=0;a<this.boardWidth;a++)if(0==this.board[a][c]){b=!1;break}if(b&&(this.removeLines(c),c++,a++,4<=a))break}return a},this.removeLines=(a)=>{for(let b=a;0<b;--b)for(let a=0;a<this.boardWidth;a++)this.board[a][b]=this.board[a][b-1];for(let b=0;b<this.boardWidth;b++)this.board[b][0]=0},this.init()}}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});b.default=class{constructor(a=null,b=0,c=0){this.shape=[],this.posX=0,this.posY=0,this._shapes={1:[[0,0,0],[1,1,1],[0,1,0]],2:[[0,2,0],[0,2,0],[0,2,2]],3:[[0,3,0],[0,3,0],[3,3,0]],4:[[4,4],[4,4]],5:[[0,0,0],[5,5,0],[0,5,5]],6:[[0,0,0],[0,6,6],[6,6,0]],7:[[0,7,0,0],[0,7,0,0],[0,7,0,0],[0,7,0,0]]},this.setPosX=(a)=>(this.posX=a,this),this.setPosY=(a)=>(this.posY=a,this),this.rotate=()=>{for(let a=0;a<this.shape.length;a++)for(let b=0;b<a;b++)[this.shape[b][a],this.shape[a][b]]=[this.shape[a][b],this.shape[b][a]];for(let a=0;a<this.shape.length;a++)this.shape[a]=this.shape[a].reverse();return this},this.reverseRotate=()=>(this.rotate(),this.rotate(),this.rotate(),this),this.getShape=()=>this.shape,this.getPosX=()=>this.posX,this.getPosY=()=>this.posY,this.updatePosX=(a)=>{0<=a?this.posX++:this.posX--},this.updatePosY=()=>{this.posY++},null==a&&(a=Math.floor(7*Math.random())+1),this.shape=this._shapes[a],this.posX=b,this.posY=c}}},function(a,b){'use strict';Object.defineProperty(b,'__esModule',{value:!0});b.default=class{constructor(){this.lines=0,this.points=0,this.level=0,this.levelLines=0,this.reset=()=>{this.lines=0,this.points=0,this.setLines(0),this.chechLevel()},this.getLines=()=>this.lines,this.getLevel=()=>this.level,this.chechLevel=()=>{10<=this.levelLines&&(this.level++,this.levelLines=0),this.counterLevel.innerHTML=this.level+1},this.setLines=(a)=>{this.lines+=a,this.levelLines+=a,this.chechLevel(),this.counterLines.innerHTML=this.lines},this.counterLines=document.querySelector('#counter-lines'),this.counterLevel=document.querySelector('#counter-level')}}}]);