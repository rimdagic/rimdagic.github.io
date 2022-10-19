import { game } from './game.js';
import { keyUp, keyDown } from './event.js'

window.addEventListener('keypress', keyDown);
window.addEventListener('keyup', keyUp);

game.start();
