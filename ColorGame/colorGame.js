var colors = writeColor(6);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var message = document.getElementById("message");

colorDisplay.textContent = pickedColor;

for(var i = 0; i < colors.length; i++){
	//add initial colors 
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		var clickedColor = this.style.backgroundColor;
		if(clickedColor === pickedColor){
			message.textContent = "Correct";
			changeColor(clickedColor);
		}
		else {
			this.style.backgroundColor = "#232323";
			message.textContent = "Try Again";
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

		n1 = getRandomRgbValue();
		n2 = getRandomRgbValue();
		n3 = getRandomRgbValue();

		var color = ["rgb(" + n1 + ", " + n2 + ", " + n3 + ")"];
		arr.push(color);
		console.log(arr);
	}
	return arr;
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function getRandomRgbValue(){
	min = 0;
	max = 255;
	var randomNum = Math.floor(Math.random() * (max - min)) + min;
	return randomNum;
}