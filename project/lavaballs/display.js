import { context } from './entity.js'

export function drawDisplay(message, x, y) {
    context.fillStyle = 'rgba(125, 50, 50, 1.0)'
    context.font = '30px verdana';
    context.fillText(message, x, y,);
    
}