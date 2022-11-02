import { cardNames } from "./card-names.js";
import { Card, shuffleCards } from "./card.js"
import { drawTitleScreen } from "./draw.js";

export let canvas = document.getElementById('canvas');
export let context = canvas.getContext('2d');
export let tarotDeck = [];

//Create 78 card objects
for (let i = 0; i < cardNames.length; i++) {
    let card = cardNames[i];
    tarotDeck.push(new Card(card, undefined, undefined, 56, 96));
}

//shuffle the cards
tarotDeck = shuffleCards(tarotDeck);

drawTitleScreen();