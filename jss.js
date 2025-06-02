var TEMP = document.getElementById("temp");
var TARGET = document.getElementById("target");
var CARD = TEMP.querySelector(".card");

var DECK = [

];
var cardCount = 52;
for(var i=0;i<cardCount-2;i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "" + i;
    cardCopy.style.backgroundPositionX = -i%13 + "00%";
    cardCopy.style.backgroundPositionY = -i%4 + "00%";
    TARGET.append(cardCopy);
}

var shuffledDeck = function(x){
    var cards = [];

    Math.floor(Math.random()*x);
    return cards;
};

DECK = shuffledDeck(x);