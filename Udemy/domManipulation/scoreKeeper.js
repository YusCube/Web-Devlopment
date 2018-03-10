var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Scr");
var p2Display = document.querySelector("#p2Scr");
var gameIn = document.querySelector("input");
var reset = document.querySelector("#rst");
var game = 5;
var gameOver = false;
var p1Score = 0;
var p2Score = 0;
var points = document.querySelector("p span");

p1Button.addEventListener("click", function(){
	if(!gameOver)
		p1Score++;
	if (p1Score === game){
		p1Display.classList.add("winner");
		gameOver = true;
	}
	p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function(){
	if(!gameOver)
		p2Score++;
	if (p2Score === game){
		p2Display.classList.add("winner");
		gameOver = true;
	}
	p2Display.textContent = p2Score;
});

reset.addEventListener("click", function(){
	resetFun();
});

function resetFun(){
	p1Score = p2Score = 0;
	gameOver = false;
	p1Display.textContent = p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
}

gameIn.addEventListener("change", function(){
	game = Number(gameIn.value);
	points.textContent = game;
	resetFun();
});