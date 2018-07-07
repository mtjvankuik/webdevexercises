var answer = true;

while(answer){
	var input = prompt("Are we there yet?");
	
	if(input === "yes" || input === "yeah"){
		answer = false;
		alert("We finally made it!");
	}
}
