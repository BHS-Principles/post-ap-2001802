var FRAMES = [
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},

];

var HTML = document.querySelector(".card");

var doSomething = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame me up before you go go");
};

for(var count = 0; count < FRAMES.length; count++ )
{
    var d = FRAMES[count];
    var copy = HTML.cloneNode(true);
    copy.style.backgroundPositionX = count%13 + "00%";
    copy.style.backgroundPositionY = count%4 + "00%";
    d.suit = Math.floor(count/13);
    
    d.number = count%13;
    copy.addEventListener("click", (e)=>{ doSomething(e,d) } );

    document.body.append(copy);

}
alert("?????");

