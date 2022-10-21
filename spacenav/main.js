let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let stars = [];
let tickCount = 0;
let tickLooping = true;
let width = canvas.width;
let height = canvas.height;
let halfWidth = canvas.width / 2;
let halfHeight = canvas.height / 2;
let origo = {x: halfWidth, y: halfHeight}
let slope = 0;
let key = {
    left : false,
    right : false,
    up : false,
    down : false
}

class Position {
    constructor(){
        this.x = Math.random() * width,
        this.y = Math.random() * height

        if (this.x > halfWidth && this.y < halfHeight){
            this.quadrant = 1;
        } else if (this.x < halfWidth && this.y < halfHeight){
            this.quadrant = 2;
        } else if (this.x < halfWidth && this.y > halfHeight){
            this.quadrant = 3;
        } else if (this.x > halfWidth && this.y > halfHeight){
            this.quadrant = 4;
        }
    }
}

class Velocity {
    constructor (position){

        let slopeNeg = slope - 1;
        let slopePos = slope + 1;

        if (position.quadrant === 2) {
            this.x = 1  /slopePos *- 1 * deltaTime//Negativt
            this.y = slope  /slopePos *- 1 * deltaTime//Negativt
            //Left up


        } else if (position.quadrant === 1) {
            this.x = 1 / slopeNeg  *-1 *deltaTime//Positivt
            this.y = slope / slopeNeg *-1*deltaTime// Negativt
            // Right top


        } else if (position.quadrant === 4) {
            this.x = 1  /slopePos*deltaTime// Positivt
            this.y = slope /slopePos*deltaTime// Positivt
            //Right down


        } else if (position.quadrant === 3){
            this.x = 1  /slopeNeg*deltaTime//Negativt
            this.y = slope / slopeNeg*deltaTime//Positivt
            //Left down

        }

    }
}


class Star {
    constructor(position, velocity, radius, color){
        this.position = position;
        this.radius = radius;
        this.velocity = velocity;
        this.color = color;
    }
    move(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
    draw(){
        
        context.beginPath();
        context.fillStyle = 'rgba(100,100,200,0.1)';
        context.arc(this.position.x, this.position.y, this.radius, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.fillStyle = 'rgba(100,100,200,0.5)';
        context.arc(this.position.x, this.position.y, this.radius / 2, 0, 2 * Math.PI);
        context.fill();

        context.beginPath();
        context.fillStyle = this.color;
        context.arc(this.position.x, this.position.y, this.radius / 4, 0, 2 * Math.PI);
        context.fill();

    }

    edgeHit(i){
        if (this.position.x > width + halfWidth){
            stars.splice(i, 1);
        } 
        else if (this.position.x < 0 - halfWidth){
            stars.splice(i, 1);
        } 
        else if (this.position.y > height + halfHeight){
            stars.splice(i, 1);
        } 
        else if (this.position.y < 0 - halfHeight){
            stars.splice(i, 1);
        }
    }

    turn(deltaTime){
        if (key.left === true) {
            this.position.x += 150 * deltaTime
            this.position.y -= 0
        }

        if (key.right === true) {
            this.position.x -= 150 * deltaTime
            this.position.y -= 0
        }

        if (key.up === true) {
            this.position.x -= 0
            this.position.y -= 150 * deltaTime
        }
        
        if (key.down === true) {
            this.position.x -= 0
            this.position.y += 150 * deltaTime
        }
    }

    increaseVel() {
        if (this.position.quadrant === 1){
            this.velocity.x += 2 * deltaTime;
            this.velocity.y -= 2 * deltaTime;
        }
        else if (this.position.quadrant === 2){
            this.velocity.x -= 2 * deltaTime;
            this.velocity.y -= 2 * deltaTime;
        }
        else if (this.position.quadrant === 3){
            this.velocity.x -= 2 * deltaTime;
            this.velocity.y += 2 * deltaTime;
        }
        else if (this.position.quadrant === 4){
            this.velocity.x += 2 * deltaTime;
            this.velocity.y += 2 * deltaTime;
        }
    }

    getCloser(deltaTime) {
        this.radius += 5 * deltaTime
    }
}


function randomPosition(){
    return {
        x: Math.random * width, 
        y: Math.random * height
    }
}


function calculateSlope(position){

    let deltaY = position.y - origo.y;
    let deltaX = position.x - origo.x;
    slope = deltaY / deltaX;

}


window.addEventListener('keydown', handleKeyDown);
window.addEventListener('keyup', handleKeyUp);

function handleKeyDown(event) {
    if (event.repeat) return;

    if (event.key == 'w') {
        key.up = true;
    } else if (event.key == 's') {
        key.down = true;
    } else if (event.key == 'a') {
        key.left = true;
    } else if (event.key == 'd') {
        key.right = true;
    }
}



function handleKeyUp(event) {
    if (event.repeat) return;

    if (event.key == 'w') {
        key.up = false;
    } else if (event.key == 's') {
        key.down = false;
    }else if (event.key == 'a') {
        key.left = false;
    }else if (event.key == 'd') {
        key.right = false;
    }
}

let deltaTime;
let lastTime = Date.now();
let currentTime;

function tick(){

    currentTime = Date.now();
    deltaTime = (currentTime - lastTime) / 1000;
    lastTime = currentTime;

    tickCount++;

    context.fillStyle = 'rgb(28,28,28)';
    context.fillRect(0, 0, width, height);

    if (tickCount === 15){
        tickCount = 0;
        let position = new Position(randomPosition());
        calculateSlope(position);
        stars.push(new Star (position, new Velocity(position), 3.5 ,'rgba(200,200,255)'));
    }

    for (let i = 0 ; i < stars.length ; i++){
        let star = stars[i];
        star.move(deltaTime);
        star.draw();
        star.edgeHit(i);
        star.turn(deltaTime);
        star.increaseVel(deltaTime);
        star.getCloser(deltaTime);
    }

    if (tickLooping){
        requestAnimationFrame(tick);
    }
}

tick();