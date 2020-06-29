var cardSuits = ["H","C","S","D"];
var cardFaces = ["2","3","4","5","6","7","8","9","10","J","Q","K","A"]
var playerHand = document.querySelector("#player-hand");
var dealerHand = document.querySelector("#dealer-hand");
var dealerPoints = document.querySelector("#dealer-points");
var playerPoints = document.querySelector("#player-points");
var dealButton = document.querySelector("#deal-button");
var hitButton = document.querySelector("#hit-button");
var standButton = document.querySelector("#stand-button");
dealButton.addEventListener('click',deal);
hitButton.addEventListener('click',hit);
standButton.addEventListener('click',stand);





c


document.getElementById("deal-button").addEventListener("click", function(){
    //write dealer logic here
    
});
document.getElementById("hit-button").addEventListener("click", function(){
//write hit logic here

});
document.getElementById("stand-button").addEventListener("click", function(){
    //write "Stand" logic here
});