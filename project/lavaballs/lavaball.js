import { Entity, context } from './entity.js'

export class LavaBall extends Entity {
    constructor(x, y, dx, dy, radius) {
        super(x, y, dx, dy);
        this.radius = radius;
    }
    
    draw() {
        context.fillStyle = 'rgb(130, 15, 7)';
        context.beginPath();
        context.arc(
            this.position.x, 
            this.position.y, 
            this.radius, 
            0, 
            2 * Math.PI
        );
        context.fill();
    }
}