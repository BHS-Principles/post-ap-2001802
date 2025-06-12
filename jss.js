var TEMP = document.getElementById("temp");
var CARD = TEMP.querySelector(".card");
var TARGET = document.getElementById("target");

class Game{
    constructor(players, deck){
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
            this.deck.giveCard(this.players[i]);
            //alert("game gave this " + this.player[i].name + " a card");
        }
        while(this.gameOn()){
                alert(this.activePlayer.name + " is still playing");
        }
        while(!this.gameOn()){
            this.winner = this.activePlayer;
            alert("We win!! " + this.activePlayer.name);
            var card1 = this.player[0].card.id;
            var card2 = this.player[1].card.id;
            console.log("checkpoint1")
            if(card1 > card2){
                this.winner = this.player[0];
                return this.player[0]
            }
            if(card1 < card2){
                this.winner = this.player[1];
                return this.player[1]
            }
            else{
                this.winner = "draw";
                return "draw"
            }
        }
       /* 
        var whoWon = function()
        {
        
            
            
        }

        alert("game over")
        */
    }
    gameOn(){
        this.activePlayer = this.players[this.turn%this.players.length];
        this.turn++;
        return this.turn < 7;
    }
}

class Player{
    constructor(name){
        //stuff player is
        this.name = name;
        this.hand = [];
    }
    //stuff player can do
    illustrate(){

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
    
}

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
}



var steve = new Player("Steve");
var sue = new Player("Sue");
var myDeck = new Deck(52);
new Game([steve,sue],myDeck);