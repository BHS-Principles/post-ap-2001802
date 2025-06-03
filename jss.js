var TEMP = document.getElementById("temp");
var TARGET = document.getElementById("target");
var CARD = TEMP.querySelector(".card");

/*
var cardCount = 52;
for(var i=0;i<cardCount-2;i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "" + (i+1);
    cardCopy.style.backgroundPositionX = -i%13 + "00%";
    cardCopy.style.backgroundPositionY = -i%4 + "00%";
    TARGET.append(cardCopy);
}
*/

class Card{
    constructor(num){
        this.id = num;
        this.suit = Math.floor(num / 13);
        this.value = num % 13;
        this.pic = "mine.svg";
    }
    draw(){
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "" + (this.id);
        cardCopy.style.backgroundPositionX = -this.id%13 + "00%";
        cardCopy.style.backgroundPositionY = -this.id%4 + "00%";
        TARGET.append(cardCopy);
    }
};

var makeDeck = function(howMany){
    var deck = [];

    for(var i=0;i<howMany;i++){
        var card = new Card(i);
        deck.push(card);
    }

    return deck;
};

var shuffledDeck = function(deck){
    for(var i=0;i<deck.length;i++){
        var rnd = Math.floor(Math.random()*deck.length);

        var card1 = deck[i];
        var card2 = deck[rnd];
        deck[rnd] = card1;
        deck[i] = card2;
        //cards need to switch positions

    };
    
    return deck;
};

var DECK = makeDeck(52);
shuffledDeck(DECK);
console.log(DECK);
DECK[0].draw();
