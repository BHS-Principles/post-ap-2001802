var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Game{
    constructor(players, deck){
        this.players = players;
        this.deck = deck;
        this.activePlayer = players[0];
        this.turn = 0;

        this.play();
       
    }
    notOver = function(){
        alert("")
        return this.turn++ < 5
    }
    play = function(){
        //shuffle cards
        this.deck.shuffle();

        for(var i=0;i<this.players.length;i++){
            this.deck.deal(this.players[i]);

            while(this.notOver()){
                alert(this.activePlayer.name + "is still playing");
            };
        };
    };
};

class Player{
    constructor(name){
        this.name = name;
        this.hand = [];
    };
    draw(){

    };
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
            i+= Deck.Cards;
        }
    }
    deal(player){
        alert('I delt to: ' + player.name);
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

var plyz = [];
plyz[0] = new Player("bill");
var marieAntoinet = new Deck(52);


var newgame = new Game(plyz, Deck);


marieAntoinet.cards[0].draw();
var williamOfOrange = new Card(25);
williamOfOrange.draw();