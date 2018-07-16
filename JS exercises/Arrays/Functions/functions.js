//print reverse using for
function printReverse(arr){
	for(var i = arr.length - 1; i >= 0; i--){
		console.log(arr[i]);
	}
}

function isUniform(arr){
	for (var i = 1; i < arr.length; i++) {
		console.log("array length = " + arr.length);
		if(arr[0] !== arr[i]){
			return false;
		}
	}
	return true;
}

function sumArray(arr){
	var sum = 0;
	arr.forEach(function(num){
		sum += num;
	})
	return sum;
}

function max(arr){
	var max = 0;
	arr.forEach(function(num){
		if(num > max){
			max = num;
		}
	})	
	return max;
}

someObject.friends[0].name;