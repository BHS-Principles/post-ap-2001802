//make 4 buttons
//clone them


var LIST = [
    "1",
    "2",
    "3",
];

var BTN = document.getElementById("myButton");

var doSomething = function(event){
    //alert("Praise Me!");
    console.log(event);
    console.log("hello world");
}


for(var i = 0; i< 9;i++){
    var newBTN = BTN.cloneNode(true);
    document.body.append(newBTN);
    newBTN.addEventListener("click", doSomething);
}



