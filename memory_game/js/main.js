/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/
var cards = [
{
rank: "queen",
suit: "hearts",
cardImage: "images/queen-of-hearts.png"
},
{
rank: "queen",
suit: "diamonds",
cardImage: "images/queen-of-diamonds.png"
},
{
rank: "king",
suit: "hearts",
cardImage: "images/king-of-hearts.png"
},
{
rank: "king",
suit: "diamonds",
cardImage: "images/king-of-diamonds.png"
},
];
var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId].rank)
	cardsInPlay.push(cards[cardId].rank);
};
flipCard(0);
console.log(cards[0].suit);
console.log(cards[0].cardImage);
flipCard(2);
console.log(cards[2].suit);
console.log(cards[2].cardImage);
checkForMatch();


/*if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){alert("You found a match!")}
		else {alert("sorry, try again.")}
}*/

