let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');
let looping = false;
let entities = [];


class Position {
    constructor(x, y) {
        this.x = x;
        this.y =y;
    }
}

class Velocity {
    constructor(dx, dy) {
        this.dx = dx;
        this.dy = dy;
    }
}

class Entities {
    constructor(x, y, dx, dy) {
        this.position = new Position(x, y);
        this.velocity = new Velocity(dx, dy);
    }
    move() {
        this.position.x += this.velocity.dx;
        this.position.y += this.velocity.dy;
    }

    draw() {}
}

class LavaBall extends Entities {
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

class Player extends Entities {
    constructor(x, y, dx, dy, size) {
        super(x, y, dx, dy)
        this.size = size;
    }

    draw() {
        context.fillStyle = 'rgb(75, 255, 75)';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
    }
}


let lavaBall = new LavaBall(100, 400, 0, -1, 20);
let player = new Player(100, canvas.height - canvas.height * 0.2, 0, 0, 30);



function tick() {

    context.fillStyle = 'rgb(0, 0, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    player.move();
    lavaBall.move();
    lavaBall.draw();
    player.draw();

    if (looping) {
        requestAnimationFrame(tick);
    }
}

tick()