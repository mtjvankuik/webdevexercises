var movies = [
		{
			title: "Avatar",
			rating: 4.8,
			hasWatched: true,
		},
		{
			title: "Interstellar",
			rating: 4.9,
			hasWatched: true,
		},
		{
			title: "Red Bath",
			rating: 3.8,
			hasWatched: false,
		}
];

function buildString(movie){
	var res = "\"" + movie.title + "\"" + " - " + movie.rating + " stars";

	if(movie.hasWatched){
		console.log("You have watched " + res);
	}
	else {
		console.log("You have not seen " + res);
	}
	return res;
}

function buildStringColt(movie){
	var res = "You have ";
	if(movie.hasWatched){
		res += "watched ";
	}
	else {
		res += "not seen ";
	}
	res += "\"" + movie.title + "\"" + " - " + movie.rating +" stars ";
	return res;
}

movies.forEach(function(movie){
	console.log(buildStringColt(movie));
});
