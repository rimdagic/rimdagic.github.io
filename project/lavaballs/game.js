import { generateRandom } from './utility.js';
import { canvas, context } from './entity.js';
import { Player } from './player.js';
import { LavaBall } from './lavaball.js';

export class Game {
    constructor(canvas, context){
        this.canvas = canvas;
        this.context = context;
        this.looping = true;
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
game.entities.push(new Player(100, canvas.height - canvas.height * 0.2, 2, 0, 20));

let tickCount = 0;

function tick() {
tickCount += 1;

    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    if (tickCount > 90) {
        tickCount = 0;
        game.entities.push(new LavaBall(generateRandom(20, canvas.width - 20, false), 0, 0, 1, generateRandom(5, 20, false)));
    } 

    for (let i = 0; i < game.entities.length; i++){
        let entity = game.entities[i];
        entity.move();
        entity.draw();
    }

    if (game.looping) {
        requestAnimationFrame(tick);
    }
}
