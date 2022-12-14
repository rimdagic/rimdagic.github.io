import { canvas } from "./entity.js";

export function generateRandom(min, max, decimals) {
    if (decimals) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}

export function isOutside(lavaball){
    if (lavaball.position.y > canvas.height) {
        return true;
    }
}

export function playerBallCollision(player, lavaBall) {
    let deltaX = Math.abs(player.position.x - lavaBall.position.x);
    let deltaY = Math.abs(player.position.y - lavaBall.position.y);

    if (deltaX !== 0 || deltaY !== 0){
        if (deltaX > (player.size / 2 + lavaBall.radius)) { return false };
        if (deltaY > (player.size / 2 + lavaBall.radius)) { return false }

        if (deltaX <= player.size / 2 ) { return true };
        if (deltaY <= player.size / 2 ) { return true };

        let distSquared = ((deltaX - player.size / 2) ** 2) + ((deltaY - player.size / 2) ** 2);
        return distSquared <= lavaBall.radius ** 2;
    }
}

export function messages(type) {
    let died = [
        'you are throwing your lives away',
        'oh no, you hit the lethal lava',
        'you died',
        'come on, you can do better',
        ];

        if (type === 'died') {
            return died[generateRandom(0, died.length - 1, false)];
        }
}