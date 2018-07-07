var numberGuess = prompt("Enter a number: ");
var guess = Number(numberGuess);

var randomNumber = Math.floor(Math.random() * 10);
console.log(randomNumber);

while (guess !== randomNumber){
	if (guess < randomNumber) {
			alert("Higher!");
			guess = Number(prompt("Enter a number: "));
		}
	else {
			alert("Lower!");
			guess = Number(prompt("Enter a number: "));
		}
}

if (guess === randomNumber) {
	alert("You guessed right!");
}
