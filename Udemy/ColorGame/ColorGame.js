//Variables for assigning classes and IDs
var squares = document.querySelectorAll(".square");
var colors = createColors(6);
var rgbText = document.querySelector("#rgb");
var pickedColor = colors[randomNumber(6)];
var h1Header = document.querySelector("h1");
var message = document.querySelector("#message");

//
for(var i = 0;i < squares.length; i++){
	//Set Square Colors
	squares[i].style.background = colors[i];
	
	//Listen for clicks from the squares
	squares[i].addEventListener("click", function(){
		//rgbText.textContent = this.style.background;
		var clickedColor = this.style.background;
		if (clickedColor === pickedColor){
			rgbText.textContent = this.style.background;
			h1Header.style.backgroundColor = clickedColor;
			message.textContent = "Correct!!!";
			for(var i = 0;i < squares.length; i++){
				squares[i].style.background = clickedColor;
			}
		}
		else
			this.style.background = document.body.style.backgroundColor;
			message.textContent = "Try Again :(";

		return (clickedColor, pickedColor);
	});
}

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
