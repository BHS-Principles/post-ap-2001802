var LIST = [
    "1",
    "2",
    "3",
];

var BTN = document.getElementById("myButton");

for(var i = 0; i<3;i++){
    var newBTN = BTN.cloneNode(true);
    newBTN.innerHTML =
    document.body.append(newBTN);
    alert("Check me out" + LIST[i]);
}