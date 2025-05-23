//make 4 buttons
//clone them

var HTML = document.getElementById("myFrame");

var FRAMES = [

];

var somethingElse = function(event, data){
    console.log(event);
    console.log(data);
    alert("frame1 works??");
};
for(var count = 0; count < FRAMES.length; count++){
    var copy=HTML.cloneNode(true);
    copy.addEventListener("click",(e)=>{somethingElse(e,d)})
    document.body.append(copy);
};
alert("test")

