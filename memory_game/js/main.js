/*
currently the only bug is when you click the same card twice it counts it as a win. To fix probably need to just remove event listener
when a card is clicked.
*/

//create an array to store 4 cards
var cards = [
{
	rank:"queen",
	suit:"hearts",
	cardImage:"images/images/queen-of-hearts.png",
},
{
	rank:"queen",
	suit:"diamonds",
	cardImage:"images/images/queen-of-diamonds.png",
},
{
	rank:"king",
	suit:"hearts",
	cardImage:"images/images/king-of-hearts.png",
},
{
	rank:"king",
	suit:"diamonds",
	cardImage:"images/images/king-of-diamonds.png",
}
];
//empty array to hold cards in play
var cardsInPlay = [];
//empty array for scoreboard
var score = [];
//function that checks for a match and gives success or fail message
function checkForMatch (){

	if (cardsInPlay.length === 2){
		if (cardsInPlay[0] === cardsInPlay[1]) {
			score.push(1);
			document.getElementById('score').innerHTML = score.length;
			var success = document.createElement('button');
			success.innerHTML = "Success!: Go Again?";
			document.getElementById('game-board').appendChild(success);
			success.addEventListener('click', reset);
		}
		else {
			var failure = document.createElement('button');
			failure.innerHTML = "Failure: Try Again?";
			document.getElementById('game-board').appendChild(failure);
			failure.addEventListener('click', reset);
		}
	}
}
//reset game
function reset () {
	console.log('reset');
	cardsInPlay = [];
	document.getElementById('game-board').innerHTML = '';
	createBoard();
}


//function for all the steps when user flips a card
function flipCard (){
	var cardId = this.getAttribute('data-id');
	this.setAttribute('src', cards[cardId].cardImage)
	cardsInPlay.push(cards[cardId].rank)
	console.log(cardsInPlay);
	checkForMatch();
}
//function to dynamically create card images
function createBoard () {
	for (var i = 0; i < cards.length; i++){
		var cardElement = document.createElement('img');
		cardElement.setAttribute('src', 'images/images/back.png');
		cardElement.setAttribute("data-id", i);
		cardElement.addEventListener('click', flipCard);
		document.getElementById('game-board').appendChild(cardElement);
	}
}
createBoard();
