import { cardNames } from './deck.js'
export const canvas = document.getElementById('table');
const context = canvas.getContext('2d');

export function randomCard(){
    return cardNames[Math.floor(Math.random()*78)+1];
}

export function spread(position, card) {

    //context.fillStyle = 'rgb(100, 31, 31)'
    //context.fillRect(0, 0, canvas.width, canvas.height)

    context.strokeStyle = 'rgb(0,0,0)'
    context.fillStyle = 'rgb(30, 30, 60)';

    //past
    if (position[0] === undefined){
        position[0] = card.type;

        context.strokeRect(canvas.width * 0.2, canvas.height / 2, card.size.w, card.size.h);
        context.fillRect(canvas.width * 0.2, canvas.height / 2, card.size.w, card.size.h);

       // context.fillStyle = 'rgb(255, 255, 255)'
        context.font = '20px serif';
    //    context.fillText(card.type, canvas.width * 0.2, canvas.height / 2, [70]);
        console.log('the first card is '+position[0]);
    } 

    //present
    else if (position[1] === undefined){
        position[1] = card.type;

        context.strokeRect(canvas.width * 0.4, canvas.height / 2, card.size.w, card.size.h);
        context.fillRect(canvas.width * 0.4, canvas.height / 2, card.size.w, card.size.h);

        //context.fillStyle = 'rgb(255, 255, 255)'
        context.font = '20px serif';
     //   context.fillText(card.type, canvas.width * 0.4, canvas.height / 2, [70]);

        console.log('the second card is '+card.type);
    }

    //future
    else if (position[2] === undefined){
        position[2] = card.type;

        context.strokeRect(canvas.width * 0.6, canvas.height / 2, card.size.w, card.size.h);
        context.fillRect(canvas.width * 0.6, canvas.height / 2, card.size.w, card.size.h);

       // context.fillStyle = 'rgb(255, 255, 255)'
        context.font = '20px serif';
    //    context.fillText(card.type, canvas.width * 0.6, canvas.height / 2, [70]);
        console.log('the third card is '+card.type);
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




export function pickCard(deck) {
    let picked = deck[0];
    deck.splice(0, 1);
    return picked;
}

export function cardsUnfold(deck) {



    let cardNumber = 0;
    let cardsOnTable = [];


    for(let i = 0; i < 3; i++) {
        for(let j = 0; j < 10; j++){

            deck[cardNumber].position.x = canvas.width * 0.13 + 50 * j;
            deck[cardNumber].position.y = canvas.height * 0.2 + 120 * i + 4 * j;

            cardsOnTable.push(deck[cardNumber]);
/*
            context.fillRect( 
                canvas.width * 0.13 + 50 * j,
                canvas.height * 0.2 + 120 * i + 4 * j, 
                deck[cardNumber].size.w , 
                deck[cardNumber].size.h );


                context.strokeRect( 
                    canvas.width * 0.13 + 50 * j, 
                    canvas.height * 0.2 + 120 * i + 4 * j, 
                    deck[cardNumber].size.w , 
                    deck[cardNumber].size.h );
*/
                    cardNumber++;
        }
    }
    console.log(cardsOnTable)

    drawCards(cardsOnTable);
    return cardsOnTable;
}
/*

            context.fillRect( 
                canvas.width * 0.2 + 70 * j,
                canvas.height * 0.2 + 120 * i + 4 * j, 
                deck[cardNumber].size.w, 
                deck[cardNumber].size.h);

            context.strokeRect( 
                canvas.width * 0.2 + 70 * j, 
                canvas.height * 0.2 + 120 * i + 4 * j, 
                deck[cardNumber].size.w * 0.7, 
                deck[cardNumber].size.h * 0.7);

                deck[cardNumber].position.x = canvas.width * 0.2 + 70 * j;
                deck[cardNumber].position.y = canvas.height * 0.2 + 120 * i + 4 * j;
                //console.log(deck[cardNumber].type)

                console.log(deck[cardNumber].type)
                cardNumber++;
        }
    }
    console.log(deck[2].position)
}
*/


function drawCards(cards) {

    
    context.fillStyle = 'rgb(100, 31, 31)';
    context.fillRect(0, 0, canvas.width, canvas.height)
    context.strokeStyle = 'rgba(0, 0, 0, 1.0)'
    context.lineWidth = 3;
    context.fillStyle = 'rgb(40, 40, 75)';

    for(let i = 0; i < cards.length; i++) {
        let card = cards[i];
        context.fillRect(card.position.x, card.position.y, card.size.w, card.size.h)
        context.strokeRect(card.position.x, card.position.y, card.size.w, card.size.h)

    }
}











export function tableClick(event, cards) {
    //hitCard({x: event.clientX, y: event.clientY}, playerCards, deck)
    const rect = canvas.getBoundingClientRect();

    let clickX = event.clientX - rect.left;
    let clickY = event.clientY - rect.top;

    let topCard;

    for(let i = cards.length - 1; i >= 0; i--) {
        let card = cards[i];

        if(
            clickX > card.position.x && clickX < card.position.x + card.size.w &&
            clickY > card.position.y && clickY < card.position.y + card.size.h
        ) {

            topCard = i;
            cards.splice(topCard, 1);
            console.log(card.type)
            break;

    }
}



drawCards(cards)
//cardsUnfold(cards)

}
    /*
    let hit;
    for(let i = 0; i < 30; i++) {

        if(
            event.clientX > deck[i].position.x && 
            event.clientX < deck[i].position.x + deck[i].size.w *0.7&&
            event.clientY > deck[i].position.y &&
            event.clientY < deck[i].position.y + deck[i].size.h * 0.7) {
                hit = i
                //continue;
        }

    }
    context.strokeStyle = 'rgb(240,240,240)'
   // context.strokeRect();
   */

