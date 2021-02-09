let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () => {
    const target = Math.floor(Math.random()*9);
    return target;
};

const compareGuesses = (huGuess, pcGuess, target) => {
    let winnerHu=0; 
    let winnerPc=0; 
    if (huGuess >= target && pcGuess >= target) {
        winnerHu = huGuess - target;
        winnerPc = pcGuess - target;
    } else if (huGuess < target && pcGuess >= target) {
        winnerHu = target - huGuess;
        winnerPc = pcGuess - target;
    } else if (huGuess >= target && pcGuess < target) {
        winnerHu = huGuess - target;
        winnerPc = target - pcGuess;
    } else {
        winnerHu = target - huGuess;
        winnerPc = target - pcGuess;
    }
    if (winnerHu<=winnerPc) {
        return true;
    } else {
        return false;
    }
};

const updateScore = (winner) => {
    if (winner === 'human') {
        humanScore += 1;
    } else {
        computerScore += 1;
    }
};

const advanceRound = () => {
    currentRoundNumber += 1;
};

// advanceRound();
// generateTarget();
// const target = generateTarget();
// console.log(target);
// console.log(compareGuesses(9, 0, target));
