import { generateRandom, isOutside, playerBallCollision, messages } from './utility.js';
import { canvas, context } from './entity.js';
import { Player } from './player.js';
import { LavaBall } from './lavaball.js';

export class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.looping = true;
        this.lives = 3;
        this.entities = [];
        this.key = {
            left: false, 
            right: false
        }
    }

    start() {
        tick();
    }
}

export const game = new Game(canvas, context);
game.entities.push(new Player(100, canvas.height - canvas.height * 0.2, 100, 0, 50));

let timeCount = 0;
let currentTime = Date.now();
let lastTime= 0;


function tick() {

    lastTime = currentTime;
    currentTime = Date.now();
    let deltaTime = (currentTime - lastTime) / 1000;

    timeCount += deltaTime

        context.fillStyle = 'rgb(0, 0, 0)';
        context.fillRect(0, 0, canvas.width, canvas.height);

        if (timeCount > 0.7) {
            timeCount = 0;
            game.entities.push(new LavaBall(generateRandom(20, canvas.width - 20, false), 0, 0, 125, generateRandom(5, 20, false)));
        } 

        for (let i = 0; i < game.entities.length; i++){
            let entity = game.entities[i];
            entity.move(deltaTime);

            if (isOutside(entity)) {
                game.entities.splice(i, 1);
                i = i - 1;
            }

            if (playerBallCollision(game.entities[0], entity)){
                console.log(messages('died'))
                game.entities.splice(i, 1);
                i = i - 1;
            }
            entity.draw();
        }

        if (game.looping) {
            requestAnimationFrame(tick);
        }
}
