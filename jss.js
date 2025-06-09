var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");


class Player{
    constructor(){

    }
};

class Deck{
    constructor(num){
        this.cardCount = num;
        this.cards = [];
        this.make();
    };

    make(){
        

        for(var i=0;i<this.cardCount;i++){
            var card = new Card(i);
            this.cards.push(card);
        }

        return this.cards;
    }
    shuffle(){
        for(var i=0;i<this.cardCount;i++){
            i+= deck.Cards;
        }
    }
};

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



var marieAntoinet = new Deck(52);
marieAntoinet.cards[0].draw();
var williamOfOrange = new Card(25);
williamOfOrange.draw();
