import { choosenCards } from './card.js';
import { context, canvas, tarotDeck } from './experience.js'

let messageNumber = 0;
let messages = [
    'Choose a card to represent the past',
    'Choose a card that represents the present',
    'Choose a card that will represent the future',
    'Turn the card of the past',
    'Turn the card of the present',
    'Turn the card of the future'
]

export function drawTitleScreen() {
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgb(0,0,0)';
    context.font = '38px serif';
    context.fillText('Think of a question or an area of your life', 20, canvas.height / 2);
}

export function drawChoice() {
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'rgb(0, 50, 50)';
    context.strokeStyle = 'rgb(200,200,200)'

    for (let i = 0; i < tarotDeck.length; i++) {
        let card = tarotDeck[i];
        context.strokeRect(card.position.x, card.position.y, card.size.w, card.size.h);
        context.fillRect(card.position.x, card.position.y, card.size.w, card.size.h);
    }

    context.fillStyle = 'rgb(200, 200, 200)'
    context.font = '38px serif';
    context.fillText(messages[messageNumber], 30, canvas.height * 0.09);
    messageNumber ++;
}

export function drawSecondTitle(choosenCards) {
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgb(0,0,0)';
    context.font = '38px serif';
    context.fillText(messages[messageNumber], 30, canvas.height * 0.09);
    context.strokeStyle = 'rgb(200, 200, 200)';

    context.fillStyle = 'rgb(0, 50, 50)';

    for (let i = 0; i < choosenCards.length; i++) {
        let card = choosenCards[i];

        context.strokeRect(card.position.x, card.position.y, card.size.w, card.size.h);
        context.fillRect(card.position.x, card.position.y, card.size.w, card.size.h);
        
    }

    messageNumber ++;
}

export function turnChoosenCard(index) {
    context.fillStyle = 'rgb(200,200,200)';
    context.fillRect(choosenCards[index].position.x, choosenCards[index].position.y, choosenCards[index].size.w, choosenCards[index].size.h)
    context.fillText(choosenCards[index].type, choosenCards[index].position.x, choosenCards[index].position.y + 120)
}

export function presentResult() {
    context.fillStyle = 'rgb(100, 31, 31)'
    context.fillRect(0, 0, canvas.width, canvas.height)

    context.fillStyle = 'rgb(200, 200, 200)'
    context.fillText(choosenCards[0].type, 50, 100)
    context.fillText(choosenCards[1].type, 250, 200)
    context.fillText(choosenCards[2].type, 400, 300)
    console.log(`Information about choosen cards`)
}
