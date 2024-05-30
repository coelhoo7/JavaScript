// Initialize variables to store scores and current round number
let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Function to generate a random target number between 0 and 9
const generateTarget = () => {
    return Math.floor(Math.random() * 10);   
}

// Log the generated target number for testing
console.log(generateTarget());

// Function to compare human guess, computer guess, and target number
const compareGuesses = (humanGuess, computerGuess, targetGuess) => {
  const humanDifference = Math.abs(targetGuess - humanGuess);
  const computerDifference = Math.abs(targetGuess - computerGuess);

  // Return true if human's guess is closer or equal to the target, otherwise false
  return humanDifference <= computerDifference;
}

// Function to update scores based on the winner
const updateScore = (winner) => {
    // Increment humanScore if human wins, otherwise increment computerScore
    if(winner === 'human') {
        humanScore += 1;
    } else if(winner === 'computer') {
        computerScore++;
    }
}

// Function to advance to the next round and update scores accordingly
const advanceRound = () => {
    // Increment currentRoundNumber
    currentRoundNumber++;

    // No need to return anything as scores are updated within the function based on the winner
}
