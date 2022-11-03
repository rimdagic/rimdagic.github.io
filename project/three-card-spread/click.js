import { drawChoice, drawSecondTitle, turnChoosenCard, presentResult } from "./draw.js";
import { giveCardsPositions, removeCardPositions, isCardClicked, choosenCards, giveChoosenCardsPositions, isChoosenCardClicked } from "./card.js"
import { tarotDeck } from "./experience.js"
let stage = 1;


export function click(event) {
    let rect = canvas.getBoundingClientRect();
    let clickPoint = {
        x: event.clientX - rect.left,
        y: event.clientY - rect.top
    }

    switch (stage) {
        case 1:
            console.log(clickPoint)
            giveCardsPositions();
            drawChoice();
            stage ++;
            break;

        case 2:
            let firstCard = isCardClicked(clickPoint);
            if (firstCard !== undefined){
                choosenCards.push(firstCard);
                stage ++;
                drawChoice();
            }

            break;
        
        case 3:
            let secondCard = isCardClicked(clickPoint);
            if (secondCard !== undefined) {
                choosenCards.push(secondCard);
                stage ++;
                drawChoice();
            }

            break;

        case 4:
            let thirdCard = isCardClicked(clickPoint);
            if (thirdCard !== undefined) {
                choosenCards.push(thirdCard);
                stage ++;
                removeCardPositions();
                giveChoosenCardsPositions(choosenCards);
                drawSecondTitle(choosenCards);
            }

            break;

        case 5:
            if (isChoosenCardClicked(clickPoint, 0)){
                turnChoosenCard(0)
                stage ++;
            }

            break;

        case 6:
            if (isChoosenCardClicked(clickPoint, 1)){
                turnChoosenCard(1)
                stage ++;
            }

            break;
        
        case 7:
            if (isChoosenCardClicked(clickPoint, 2)){
                turnChoosenCard(2)
                //presentResult();
                stage ++;
            }

            break;

        case 8:

            break;
    }
}
