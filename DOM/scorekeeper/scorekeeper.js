var p1button = document.getElementById("p1");
var p2button = document.getElementById("p2");
var p1disp = document.getElementById("p1disp");
var p2disp = document.getElementById("p2disp");

var resetButton = document.getElementById("reset");

var winnerScore = 5;
var numInput = document.querySelector("input");

var sdisp = document.getElementById("sdisp");
sdisp.textContent = winnerScore;

var p1score = 0;
var p2score = 0;

var gameOver = false;

p1button.addEventListener("click", function(){

	if(!gameOver){
		p1score++;
		p1disp.textContent = p1score;

		if(p1score === winnerScore){
		gameOver = true;
		p1disp.classList.toggle("green");
		}
	}
});

p2button.addEventListener("click", function(){

	if (!gameOver) {
		p2score++;
		p2disp.textContent = p2score;

		if(p2score === winnerScore){
		gameOver = true;
		p2disp.classList.toggle("green");
		}
	}
});

numInput.addEventListener("change", function(){
	winnerScore = Number(numInput.value);
	sdisp.textContent = numInput.value;
	reset();
});	

resetButton.addEventListener("click", function(){
	reset();
});

function reset(){
	gameOver = false;
	p1score = 0;
	p2score = 0;
	p1disp.textContent = p1score;
	p2disp.textContent = p2score;
	p1disp.classList.remove("green");
	p2disp.classList.remove("green");
};
