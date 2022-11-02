import { Position, Size } from "./components.js";
import { canvas, tarotDeck } from "./experience.js";

export let choosenCards = [];

export class Card {
    constructor (type, x, y, width, height, img) {
        this.type = type;
        this.size = new Size(width, height);
        this.position = new Position(x, y);
        this.imagePath = img;
        
    }
}

export function shuffleCards(theCards) {
    let shuffledCards = [];

    for (let i = 0; i < 78; i++){
        let random = Math.floor(Math.random() * theCards.length);
        shuffledCards.push(theCards[random]);
        theCards.splice(random, 1);
    }
    return shuffledCards;
}

export function giveCardsPositions() {
    let cardNumber = 0;
    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 10; j++){
            tarotDeck[cardNumber].position.x = canvas.width * 0.13 + 50 * j;
            tarotDeck[cardNumber].position.y = canvas.height * 0.2 + 120 * i + 4 * j;
            cardNumber++;
        }
    }
}

export function isCardClicked(clickPoint) {
    let cardIndex;
    for(let i = tarotDeck.length - 1; i >= 0; i--) {
        let card = tarotDeck[i];

        if (clickPoint.x > card.position.x && 
            clickPoint.x < card.position.x + card.size.w &&
            clickPoint.y > card.position.y && 
            clickPoint.y < card.position.y + card.size.h)
        {
            tarotDeck[i].position.x = undefined;
            tarotDeck[i].position.y = undefined;
            return card;
        }
    }
}

export function removeCardPositions() {
    for (let i = 0; i < tarotDeck.length - 1; i++) {
        tarotDeck[i].position.x = undefined;
        tarotDeck[i].position.y = undefined;
    }
}

export function giveChoosenCardsPositions(choosenCards) {

    console.log(choosenCards.length)
    for (let i = 0; i < choosenCards.length; i++){
        let card = choosenCards[i];
        card.position.x = 250 * i + 50;
        card.position.y = canvas.height / 2;
    }
}

export function isChoosenCardClicked(clickPoint, num) {
    if (clickPoint.x > choosenCards[num].position.x && 
        clickPoint.x < choosenCards[num].position.x + choosenCards[num].size.w &&
        clickPoint.y > choosenCards[num].position.y && 
        clickPoint.y < choosenCards[num].position.y + choosenCards[num].size.h)
    {
        return true;
    }
}

