// add scripts
$(document).on('ready', function() {
  console.log('sanity check!');
});


//computer moves logic
function computerMove () {
  //get a random option
  //get random index
  var options = ["Rock", "Paper", "Scissors"];
  var compMove = [];
  var randomIndex = Math.floor(Math.random()*(2 - 0 + 1) *1);

  compMove.push(options[randomIndex]);

  return compMove[0];
}




//player move logic




//win logic
//if rock vs. scissors, rock wins
//if rock vs. paper, paper wins
//if scissors vs. paper, scissors wins
function winLogic (move1, move2) {
  if ( move1 === "Rock" && move2 === "Scissors") {
    return ("Rock");
  } else if ( move2 === "Rock" && move1 === "Scissors") {
    return ("Rock");
  } else if (move1 === "Rock" && move2 === "Paper") {
    return ("Paper");
  } else if (move2 === "Rock" && move1 === "Paper") {
    return ("Paper");
  } else if (move1 === "Scissors" && move2 === "Paper") {
    return ("Scissors");
  } else if (move2 === "Scissors" && move1 === "Paper") {
    return ("Scissors");
  } else {
    return ("tie");
  }
}

//update score function




