import { choosenCards } from './card.js';
import { context, canvas, tarotDeck } from './experience.js'

let messageNumber = 0;
let messages = [
    'Choose your card of the past',
    'Choose your card of present',
    'Choose your card of the future',
    'Look at the cards, start from the left',
    'Turn the card of the present',
    'Turn the card of the future'
]

export function drawTitleScreen() {
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgb(150,150,150)';
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

    context.fillStyle = 'rgb(150,150,150)'
    context.font = '38px serif';
    context.fillText(messages[messageNumber], 30, canvas.height * 0.09);
    messageNumber ++;
}

export function drawSecondTitle(choosenCards) {
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.fillStyle = 'rgb(150,150,150)';
    context.font = '38px serif';
    context.fillText(messages[messageNumber], 30, canvas.height * 0.09);
    context.strokeStyle = 'rgb(200, 200, 200)';

    context.fillStyle = 'rgb(0, 50, 50)';

    for (let i = 0; i < choosenCards.length; i++) {
        let card = choosenCards[i];

        context.strokeRect(card.position.x, card.position.y, card.size.w * 2, card.size.h * 2);
        context.fillRect(card.position.x, card.position.y, card.size.w * 2, card.size.h * 2);
    }

    messageNumber ++;
}

export function turnChoosenCard(index) {
    context.fillStyle = 'rgb(100,31,31)';
    context.fillRect(
        choosenCards[index].position.x, 
        choosenCards[index].position.y, 
        choosenCards[index].size.w * 2, 
        choosenCards[index].size.h * 2
        );

    context.fillStyle = 'rgb(230,230,230)'
    context.font = '12px castellar';
    context.fillText(
        choosenCards[index].type, 
        choosenCards[index].position.x, 
        choosenCards[index].position.y + 220
    );


    let image = new Image();
    image.onload = function() {
    context.drawImage(
        image, 
        choosenCards[index].position.x, 
        choosenCards[index].position.y, 
        choosenCards[index].size.w * 2, 
        choosenCards[index].size.h * 2);
    };
    image.src = choosenCards[index].imagePath;
    
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