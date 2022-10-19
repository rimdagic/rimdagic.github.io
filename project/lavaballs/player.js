import { Entity, context, canvas } from './entity.js';
import { game } from './game.js';

export class Player extends Entity {
    constructor(x, y, dx, dy, size) {
        super(x, y, dx, dy)
        this.size = size;
    }

    draw() {
        context.fillStyle = 'rgb(75, 175, 75)';
        context.fillRect(this.position.x - this.size / 2, this.position.y - this.size / 2, this.size, this.size);
    }

    move(deltaTime) {
        if (game.key.left === true && this.position.x > this.size / 2){
            this.position.x -= this.velocity.dx * deltaTime;
        }
        else if (game.key.right === true && this.position.x < canvas.width - this.size / 2){
            this.position.x += this.velocity.dx * deltaTime;
        }
    }
}
