var HTML = document.getElementById("myFrame");

var FRAMES = 5;

var doSomething = function(event, data){
    console.log(event);
    console.log(data);
    alert("FRame me up before you go go");
};

for(var count = 0; count < FRAMES; count++ )
{
    var d = FRAMES;
    var copy = HTML.cloneNode(true);
    copy.addEventListener("click", (e)=>{ doSomething(e,d) } );

    document.body.append(copy);

}
alert("?????");

