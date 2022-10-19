import { Entity, context } from './entity.js';
import { game } from './game.js';

export class Player extends Entity {
    constructor(x, y, dx, dy, size) {
        super(x, y, dx, dy)
        this.size = size;
    }

    draw() {
        context.fillStyle = 'rgb(75, 175, 75)';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }

    move() {
        if (game.key.left === true){
            this.position.x -= this.velocity.dx;
        }
        else if (game.key.right === true){
            this.position.x += this.velocity.dx;
        }
    }
}