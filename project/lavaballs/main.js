let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'rgb(255, 255, 255)'
context.fillRect(canvas.width / 2 - 10, canvas.height / 2 - 10, 40, 40);

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
    move() {}
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

    move() {
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
    }
}

class Player extends Entities {
    constructor(x, y, dx, dy, size) {
        super(x, y, dx, dy)
        size = this.size;
    }

    draw() {
        context.fillStyle = 'rgb(255, 255, 255)';
        context.fillRect(this.position.x, this.position.y, this.size, this.size);
        console.log('DRAWING PLAYER')
    }
}


let lavaBall = new LavaBall(100, 400, 10, 10, 20);
lavaBall.draw();

let player = new Player(100, 200, 10, 10, 40);
console.log(lavaBall);
player.draw();