import { Position, Velocity } from './component.js';

export let canvas = document.getElementById('canvas');
export let context = canvas.getContext('2d');

export class Entity {
    constructor(x, y, dx, dy) {
        this.position = new Position(x, y);
        this.velocity = new Velocity(dx, dy);
    }

    move(deltaTime) {
        this.position.x += this.velocity.dx;
        this.position.y += this.velocity.dy * deltaTime;
    }

    draw() {}
}
