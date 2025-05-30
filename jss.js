var TEMP = document.getElementById("temp");
var TARGET = document.getElementById("target");
var CARD = TEMP.querySelector(".card");

for(var i=0;i<5;i++){
    var cardCopy = CARD.cloneNode(true);
    cardCopy.innerHTML = "silver";
    cardCopy.style.backgroundPositionX = i%13 + "00%";
    cardCopy.style.backgroundPositionY = i%4 + "00%";
    TARGET.append(cardCopy);

}
