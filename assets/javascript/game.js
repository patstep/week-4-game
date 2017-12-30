
//Javascript function that wraps everything
$(document).ready(function() {
	//The random number should be between 19 - 120.
	var Random = Math.floor(Math.random()*101+19)

	//Appending this random number to the randomNumb div
	$('#randomNumb').text(Random);

	//Appending random numbers to each crystal'
	//Crystal value should be between 1 - 12
	var num1 = Math.floor(Math.random()*11+1)
	var num2 = Math.floor(Math.random()*11+1)
	var num3 = Math.floor(Math.random()*11+1)
	var num4 = Math.floor(Math.random()*11+1)

	//Declaring score/wins/losses
	var yourScore = 0;
	var wins = 0;
	var losses = 0;

	$('#winNumb').text(wins);
	$('#lossNumb').text(losses);

	// Reset function
	function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumb').text(Random);
		num1 = Math.floor(Math.random()*11+1);
		num2 = Math.floor(Math.random()*11+1);
		num3 = Math.floor(Math.random()*11+1);
		num4 = Math.floor(Math.random()*11+1);
		yourScore = 0;
		$('#totalScore').text(yourScore);
	}

	//Adding to the win count, win++
	function youWin(){
		alert("Winner winner crystal dinner!");
		wins++;
		//Appends the new number of wins to the wins div, resets the game
		$('#winNumb').text(wins);
		reset();
	}


	//Adding to the loss count
	function youLose(){
		alert("Cry about it, emo kid");
		losses++;
		$('#lossNumb').text(losses);
		reset();
	}


	//Crystal click functions
	//On click, add crystal's value to yourScore
	//Console log the new total
	//Update the totalScore text
	//Set win/lose alerts
	$('#gemOne').on("click", function(){
		yourScore = yourScore + num1;
		console.log("User score: " + yourScore);
		
	}
})