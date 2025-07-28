
let numberOfCards = 10;

function getUniqueRandomNumbers(min, max, count) {
    const range = [];
    for (let i = min; i <= max; i++) {
      range.push(i);
    }
  
    for (let i = range.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [range[i], range[j]] = [range[j], range[i]];
    }
  
    return range.slice(0, count);
  }
  
  function generateBingoCard() {
    const card = {
      B: getUniqueRandomNumbers(1, 15, 5),
      I: getUniqueRandomNumbers(16, 30, 5),
      N: getUniqueRandomNumbers(31, 45, 5),
      G: getUniqueRandomNumbers(46, 60, 5),
      O: getUniqueRandomNumbers(61, 75, 5),
    };

    card.N[2] = "X";
    return card;
  }

  function generateMultipleCards(amount){
    let bingoCards = [];
    for(let i = 0 ; i < amount; i++){
        currentBingoCard = generateBingoCard();
        bingoCards.push(currentBingoCard);
    }
    return bingoCards;
  }





  function renderBingoCards(amount){
    for(let i = 0; i < amount; i++){

      let table = generateTable(i);

      let newDiv = document.createElement('div');
      newDiv.setAttribute("id", "page")
      newTable = document.createElement('table')
      newTable.innerHTML = table
      newDiv.appendChild(newTable)
      document.getElementById('bingolist').appendChild(newDiv)

      

      let space = document.createElement('div')
      space.setAttribute("id", "newPage")
      document.getElementById('bingolist').appendChild(space)

    }

  }


  function generateTable(i){
    table = `<table><tr><th>B</th><th>I</th><th>N</th><th>G</th><th>O</th></tr><tr><td>${bingoCards[i].B[0]}</td><td>${bingoCards[i].I[0]}</td><td>${bingoCards[i].N[0]}</td><td>${bingoCards[i].G[0]}</td><td>${bingoCards[i].O[0]}</td></tr><tr><td>${bingoCards[i].B[1]}</td><td>${bingoCards[i].I[1]}</td><td>${bingoCards[i].N[1]}</td><td>${bingoCards[i].G[1]}</td><td>${bingoCards[i].O[1]}</td></tr><tr><td>${bingoCards[i].B[2]}</td><td>${bingoCards[i].I[2]}</td><td>${bingoCards[i].N[2]}</td><td>${bingoCards[i].G[2]}</td><td>${bingoCards[i].O[2]}</td></tr><tr><td>${bingoCards[i].B[3]}</td><td>${bingoCards[i].I[3]}</td><td>${bingoCards[i].N[3]}</td><td>${bingoCards[i].G[3]}</td><td>${bingoCards[i].O[3]}</td></tr><tr><td>${bingoCards[i].B[4]}</td><td>${bingoCards[i].I[4]}</td><td>${bingoCards[i].N[4]}</td><td>${bingoCards[i].G[4]}</td><td>${bingoCards[i].O[4]}</td></tr></table>`
    return table;

  }


numberOfCards = prompt("Hur många bingobrickor vill du ha?")


 var bingoCards = generateMultipleCards(numberOfCards);
 renderBingoCards(numberOfCards);



