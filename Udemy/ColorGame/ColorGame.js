//Variables for assigning classes and IDs
var colors = [];
var pickedColor;
var level;
var squares = document.querySelectorAll(".square");
var h1Header = document.querySelector("h1");
var h2Header = document.querySelector("h2");
var menu = document.querySelector("#menu");
var message = document.querySelector("#message");
var playButton = document.querySelector("#btn");
var easyButton = document.querySelector("#easy");
var hardButton = document.querySelector("#hard");


easyButton.addEventListener("click", function(){
	this.classList.add("selected");
	hardButton.classList.remove("selected");
	this.disabled = true;
	hardButton.disabled = false;
	level = 3;
	for(var i = 3;i < squares.length; i++)
		squares[i].style.display = "none";
	reset();
});

hardButton.addEventListener("click", function(){
	this.classList.add("selected");
	easyButton.classList.remove("selected");
	this.disabled = true;
	easyButton.disabled = false;
	level = 6;
	for(var i = 3;i < squares.length; i++)
		squares[i].style.display = "block";
	reset();
});

//
function playGame(){
	for(var i = 0;i < squares.length; i++){
		//Set Square Colors
		squares[i].style.background = colors[i];
		// h1Header.style.backgroundColor = "rgb("+randomNumber(256)+", "+randomNumber(256)+", "+randomNumber(256)+")";
		
		//Listen for clicks from the squares
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if (clickedColor === pickedColor){
				h1Header.style.backgroundColor = clickedColor;
				menu.style.backgroundColor = clickedColor;
				h2Header.textContent = "You have found this "+clickedColor+ " color!!!";
				message.innerHTML = "<em>Correct!!!</em>";
				playButton.textContent = "Play Again...?";
				for(var i = 0;i < squares.length; i++){
					squares[i].style.background = clickedColor;
				}
			}
			else{
				this.style.background = document.body.style.backgroundColor;
				message.innerHTML = "<em>Try Again :(</em>";
			}
			return (clickedColor, pickedColor);
		});
	}
}

playButton.addEventListener("click", reset);

//Generate Random Number upto range 'n'
function randomNumber(n){
	return (Math.floor(Math.random() * n));
}

//Generate an array of random colors
function createColors(l){
	var tempCol = [];
	for (var i = 0; i < l; i++) {
		tempCol.push("rgb("+randomNumber(256)+", "+randomNumber(256)+", "+randomNumber(256)+")");
	}
	return tempCol;
}

function reset(){
	colors = createColors(level);
	pickedColor = colors[randomNumber(level)];
	h2Header.textContent = "Find "+pickedColor+" color";
	message.textContent = null;
	h1Header.style.backgroundColor = "#13ff00f7";
	menu.style.backgroundColor = "#13ff00f7";
	playButton.textContent = "New Colors";
	playButton.disabled = false;
	playGame();
}
