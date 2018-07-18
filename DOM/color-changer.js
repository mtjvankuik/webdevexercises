var button = document.querySelector("button");
var body = document.querySelector("body");

function changeBackground(){

	switch(body.style.backgroundColor){
		case "": body.style.backgroundColor = "purple";
			break;
		case "purple": body.style.backgroundColor = "";
			break;
	}

}

button.addEventListener("click", changeBackground);


