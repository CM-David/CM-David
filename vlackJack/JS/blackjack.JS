


    var dealButton = document.getElementById("deal-button");
    var player_Deck = document.getElementById("player-hand");
    var dealer_Deck = document.getElementById("dealer-hand");
    dealButton.addEventListener("click", (event) => {
        dealer_Deck.innerHTML = '<img src="JPEG/2C.jpg" alt=""></img>';
        dealer_Deck.innerHTML = '<img src="JPEG/2S.jpg" alt=""></img>';
        player_Deck.innerHTML = '<img src="JPEG/JS.jpg" alt=""></img>';
        player_Deck.innerHTML = '<img src="JPEG/KH.jpg" alt=""></img>';
    })



// document.getElementById("btnHit").addEventListener("click", function(){
//     //write "hit" logic here
// });

// document.getElementById("btnStand").addEventListener("click", function(){
//     //write "Stand" logic here
// });

// /**
//  * Randomize array element order in-place.
//  * Using Durstenfeld shuffle algorithm.
//  */

// // function shuffleArray(array) {
// //     for (var i = array.length - 1; i > 0; i--) {
// //         var j = Math.floor(Math.random() * (i + 1));
// //         var temp = array[i];
// //         array[i] = array[j];
// //         array[j] = temp;
// //     }
// //     return array;
// // }

// //Deck of cards
// var suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
// var values = [2,3,4,5,6,7,8,9,10,'Jack', 'Queen', 'King', 'Ace'];
// var deck = [];



// function buildDeck(){


// }