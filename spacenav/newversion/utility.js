import { canvas } from './experience.js'

export function generateRandom(min, max, decimals) {
    if (decimals) {
        return Math.random() * (max - min) + min;
    } else {
        return Math.floor(Math.random() * (max + 1 - min) + min);
    }
}



export function getSlope(position) {
    let origo = { x: 0, y: canvas.height }

    let deltaX = Math.abs(position.x - origo.x);
    let deltaY = Math.abs(position.y - origo.y);
    let slope = deltaX / deltaY;

    return { dx: 10, dy: 20 }
}