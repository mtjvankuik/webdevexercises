var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.getElementsByClassName("square");
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

resetButton.addEventListener("click", function(){
	reset();
})

function reset(){
	colors = writeColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	message.textContent = "";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.display = "block";
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
		
	};
	h1.style.backgroundColor = "lightskyblue";
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function writeColor(num){
	var arr = [];

	for(var i = 0; i < num; i++){

		var n1 = getRandomRgbValue();
		var n2 = getRandomRgbValue();
		var n3 = getRandomRgbValue();

		var color = "rgb(" + n1 + ", " + n2 + ", " + n3 + ")";
		arr.push(color);
	}
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getRandomRgbValue(){
	min = 0;
	max = 256;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	return randomNum;
}

function setupModeButtons(){
		for (var i = 0; i < modeButtons.length; i++) {
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}

function setupSquares(){
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			message.textContent = "Correct!";
			resetButton.textContent = "Play Again?";
			changeColor(clickedColor);
			h1.style.backgroundColor = clickedColor;
		}
		else {
			this.style.backgroundColor = "lightskyblue";
			message.textContent = "Try Again!";
		}
		});
	}
}