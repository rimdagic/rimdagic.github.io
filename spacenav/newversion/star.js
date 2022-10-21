import { Position, Velocity } from './component.js'
import { context, canvas } from './experience.js';
import { generateRandom } from './utility.js'

export class Star {
    constructor(x, y, dx, dy) {
        this.position = new Position(x, y);
        this.depth = generateRandom(1, 20, false);
        this.radius = 5//generateRandom(3,10, true);
        this.velocity = getVelocity({ x: this.position.x, y: this.position.y });
       // console.log(this.velocity.x +' velo ' +this.velocity.y)
    }

    move() {
        this.position.x += this.velocity.dx;
        this.position.y += this.velocity.dy;
    }

    draw() {

        context.beginPath();
        context.fillStyle = 'rgb(100, 100, 255)';
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fill();
    }
}

function getVelocity(position) {
    
    let origo = { x: canvas.width / 2, y: canvas.height / 2 }

    let deltaX = position.x - origo.x;
    let deltaY = position.y - origo.y;
    let slope = deltaY / deltaX;

    let velocity = { dx: 1, dy: slope }

    if (position.x < canvas.width / 2) {
        velocity.dx *= - 1;
        velocity.dy *= - 1;
    }



    console.log('position: '+position.x+' velocity: '+velocity.dy)
    return velocity;
}