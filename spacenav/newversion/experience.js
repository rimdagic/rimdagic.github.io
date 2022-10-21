import { Position } from "./component.js";
import { Star } from "./star.js";
import { getSlope, generateRandom } from "./utility.js";


export let canvas = document.getElementById('canvas');
export let context = canvas.getContext('2d');

export class Experience {
    constructor(canvas, context) {
        this.stars = [];
        this.keys = {
            left: false,
            right: false,
            up: false,
            down: false
        }
    }

    start() {
        tick();
    }
}


//getSlope({x: 20, y: 3})

export let experience = new Experience(canvas, context);

let tickCount = 0;
function tick() {

    context.fillStyle = 'rgba(0, 0, 0, 1.0)'
    context.fillRect(0, 0, canvas.width, canvas.height);

    tickCount += 1;

    if(tickCount > 30){
        tickCount = 0;
        experience.stars.push(new Star(
            generateRandom(0, canvas.width, false),
            generateRandom(0, canvas.height, false),
            10,
            10))

            //console.log(experience.stars[experience.stars.length-1].velocity.dy)
    }
    for (let i = 0; i< experience.stars.length; i++) {
        let star = experience.stars[i];
        star.move();
        star.draw()
    }

    requestAnimationFrame(tick);
}