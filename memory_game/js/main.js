/*console.log("Up and running!");
var cardOne = "queen";
var cardTwo = "queen";
var cardThree = "king";
var cardFour = "king";
console.log("User flipped " + cardOne);
console.log("User flipped " + cardTwo);*/
var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];
function checkForMatch(){
	if (cardsInPlay[0] === cardsInPlay[1]) {
  console.log("You found a match!");
} else {
  console.log("Sorry, try again.");
}
};
var flipCard = function (cardId) {
	console.log("User flipped " + cards[cardId])
	cardsInPlay.push(cards[cardId]);
};
flipCard(0);
flipCard(2);
checkForMatch();

/*if (cardsInPlay.length === 2){
	if (cardsInPlay[0] === cardsInPlay[1]){alert("You found a match!")}
		else {alert("sorry, try again.")}
}*/

