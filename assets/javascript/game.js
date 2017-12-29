$(document).ready(function() {
	//The random number should be between 19 - 120.
	var Random = Math.floor(Math.random()*120+19)

	//Appending this random number to the randomNumb div
	$('#randomNumb').text(Random);

})