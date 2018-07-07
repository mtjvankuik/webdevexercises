function isEven(number) {
	return number % 2 === 0;
}

function factorial(number){
	if(number == 0 || number == 1)
		return 1;
	return number * factorial(number - 1);
}

function factorialAlternative(num){
	var result = 1;
	for(var i = 2; i <= num; i++){
		result *= i;
	}
	return result;
}

function factorialAlternativeTwo(num){
	if(number == 0 || number == 1)
		return 1;
	var result = num;
	for(var i = num - 1; i >= 1; i--){
		result *= i;
	}
	return result;	
}

function kebabToSnake(str){
	str = str.replace(/-/g,"_");
	return str;
}