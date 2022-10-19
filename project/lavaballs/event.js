import { game } from './game.js'

export function keyDown(event) {
    if (event.repeat) return;



    if (event.key == 'd') {
        game.key.right = true;
    } else if (event.key == 'a') {
        game.key.left = true;
    } 
}

export function keyUp(event) {
    if (event.repeat) return;

    if (event.key == 'd') {
        game.key.right = false;
    } else if (event.key == 'a') {
        game.key.left = false;
    } 
}
