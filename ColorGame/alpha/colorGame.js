var numSquares = 6;
var colors = writeColor(numSquares);
var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

easyBtn.addEventListener("click", function(){
	hardBtn.classList.remove("selected");
	easyBtn.classList.add("selected");
	numSquares = 3;
	colors = writeColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.backgroundColor = colors[i];
		} else {
			squares[i].style.display = "none";
		}
	}
});

hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = writeColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	}
});

resetButton.addEventListener("click", function(){
	colors = writeColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	message.textContent = "";

	for(var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor = colors[i];
	};
	h1.style.backgroundColor = "lightskyblue";
	this.textContent = "New Colors";
})

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial colors 
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		console.log(clickedColor, pickedColor);
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
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