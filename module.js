import confetti from 'https://cdn.skypack.dev/canvas-confetti';

$(document).ready(function() {
let container = document.querySelector(".container");
let btn = document.getElementById("spin");
let chance = [2565]
let number = chance[Math.floor(Math.random() * chance.length)];
let amount = 0;
var action = 1;
if(number == 2790){
    amount = "RM10"
}else if(number == 2655){
    amount = "RM20"
}else if(number == 2880){
    amount = "RM30"
}else if(number == 2610){
    amount = "RM50"
}else if(number == 2835){
    amount = "RM100"
}else if(number == 2700){
    amount = "RM150"
}else if(number == 2565){
    amount = "RM200"
}else if(number == 2745){
    amount = "RM300"
};

function party(){
    confetti()
}
btn.onclick = function () {
    if(action == 1){
    container.style.transform = "rotate(" + number + "deg)";
	//number += chance[Math.floor(Math.random() * chance.length)];
    //setTimeout(function() {alert("Congratulation, you won " + amount + " cash voucher!");}, 10000);
   setTimeout(function() {btn.innerHTML = "🥳"},9800);
setTimeout(function() {party();}, 9800);
setTimeout(function() {party();}, 9900);
setTimeout(function() {party();}, 10000);
    setTimeout(function() {action = 2;}, 9800);
    } else {
        location.reload();
        action = 1;
    }
}
});
//setTimeout(function() {party();}, 10000);
//document.getElementById('spin').addEventListener('click', party)