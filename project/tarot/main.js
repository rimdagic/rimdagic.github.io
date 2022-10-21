import { cardNames } from './deck.js';
import { spread, shuffleCards, pickCard, cardsUnfold, canvas, tableClick } from './utility.js';
import { Card } from './card.js'

let playersCards = [];
let theCards = [];
let chosenCard = [];

//Create 78 card objects
for (let i = 0; i < cardNames.length; i++) {
    let currentCard = cardNames[i];
    theCards.push(new Card(currentCard, undefined, undefined, 56, 96));
}

//Shuffle the deck of cards
let shuffledCards = shuffleCards(theCards);

//Put the cards on the table
let cardsOnTable = cardsUnfold(shuffledCards);

//console.log(theCards)

canvas.addEventListener("click", function() {
    tableClick(event, cardsOnTable);
  });



/*
console.log('cards left in the deck: '+theCards.length);

spread(chosenCard, pickCard(theCards));
console.log('cards left in the deck: '+theCards.length);

spread(chosenCard, pickCard(theCards));
console.log('cards left in the deck: '+theCards.length);

spread(chosenCard, pickCard(theCards));

console.log(chosenCard)
*/

//7 x 12