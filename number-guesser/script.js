let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

function generateTarget(){
  return Math.floor(Math.random() * 10);
}

function compareGuesses(human, computer, target){
  let humanDiff = getAbsoluteDistance(target, human);
  let computerDiff = getAbsoluteDistance(target, computer);
  if (humanDiff === computerDiff || humanDiff < computerDiff){
    return true;
  }
  return false;
}

function getAbsoluteDistance(number1, number2){
  return Math.abs(number1-number2);
}

function updateScore(winner){
  switch(winner){
    case 'human': 
      humanScore++;
      break;
    case 'computer':
      computerScore++;
      break;
    default:
      break;
  }
}

function advanceRound(){
  currentRoundNumber++;
}
