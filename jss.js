var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Game{
    constructor(players, deck){
        this.table = document.getElementById("target");
        this.players = players;
        this.deck = deck;
        this.activePlayer = players[0];
        this.turn = 0;
        this.winner ;
        this.play();
       
    }
    play = function(){
        //shuffle cards
        alert("playing der game")
        this.deck.shuffle();

        for(var i=0;i<this.players.length;i++){
            //this.players[i].joinGame(this);
            
            this.players[i].joinGame(this);
            this.players[i].take(this.deck.giveCard());
            //alert("I gave " + this.players[i].name + " a card");
            //alert("game gave this " + this.player[i].name + " a card");
        }
        while(this.gameOn()){
            this.updateScreen();
            //alert(this.activePlayer.name + " is still playing");
        }
        
        
        
        
    }
    updateScreen(){
        //check for layers
        for(var p=0;p<this.players.length;p++)
            this.players[p].illustrate();
    }
    whoWon(){
        this.winner = this.activePlayer;
        alert("notif")
        return this.activePlayer;
    }

    gameOn(){
        this.activePlayer = this.players[this.turn%this.players.length];
        this.turn++;
        return this.turn < 2;
    }
}

class Player{
    constructor(name){
        //stuff player is
        this.name = name;
        this.hand = [];
    }
    //stuff player can do
    joinGame(game){
        alert("joined game")
        this.inGame = game;
    }
    illustrate(){

        var dom = document.getElementById("player_ " + this.name) || document.createElement("div");
        dom.classList.add("player");
        dom.id = "player_" + this.name;

        dom.innerHTML = this.name;
        for(var c=0;c<this.hand.length;c++){
            var card = this.hand[c];
            card.illustrate(dom);
        }
        this.inGame.table.append(dom);
    }
    
    take(card){
        this.hand.push(card);
        alert(this.name + " got " + card.id)
    }
}

class Deck{
    constructor(numCards){
        this.cardCount = numCards;
        this.cards = [];
        this.make();
    }

    make(){
        

        for(var i=0;i<this.cardCount;i++){
            var card = new Card(i);
            this.cards.push(card);
        }

        return this.cards;
    }
    shuffle(){
        alert("shuffle occured")
        for(var i=0;i<this.cardCount;i++){
            i+= Deck.Cards;
        }
    }
    giveCard(player){
        var card = this.cards[this.cards.length-1];
        this.cards.length = this.cards.length -1
        player.take(card);
        alert('I delt to: ' + player.name);
    }
    //joinGame(game){
        //alert("joined game")
        //this.inGame = game;
    //}
    
}

class Card{
    constructor(num){
        this.id = num;
        this.suit = Math.floor(num / 13);
        this.value = num % 13;
        this.pic = "mine.svg";
    }
    illustrate(target){
        target = target || TARGET;
        var cardCopy = CARD.cloneNode(true);
        cardCopy.innerHTML = "" + (this.id);
        cardCopy.style.backgroundPositionX = -(this.id) + "00%"
        cardCopy.style.backgroundPositionY = Math.floor(this.id/13) + "00%";


}



var steve = new Player("Steve");
var sue = new Player("Sue");
var myDeck = new Deck(52);
new Game([steve,sue],myDeck);