

// Create a function named getComputerChoice;
function getComputerChoice() {
    
/* Use the Math.random to generate a random number, then put it inside the 
# Math.floor to round it, and then multiply the randomly generated number    
# with 3 inside the Math.floor function then add 1.

# Store the randomly generated number from the above sequence inside a variable
# called randomNumber. */

let randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber === 1) {
    return "rock";
} else if (randomNumber === 2) {
    return "paper";
} else {
    return "scissor";
}


}


function getHumanChoice() {

    const choice = prompt("Choose between rock, paper and scissor!, (all lowercase)", "");
    const apChoice = choice.toLowerCase();
    return apChoice;
}

function playRound(humanChoice, computerChoice) {
console.log("Your choice: " + humanChoice);

let humanScore = 0;
let computerScore = 0;
    switch (humanChoice + "-" + computerChoice) {

        case "rock-rock":
            console.log("You both chose the same thing! rock. No points!");
            break;

        case "paper-paper":
            console.log("You both chose the same thing! paper. No points!");
            break;

        case "scissor-scissor":
            console.log("You both chose the same thing! scissor. No points!");
            break;

        case "rock-scissor":
            console.log("You Win! Rock beats Scissor.");
            ++humanScore;
            break;

        case "paper-rock":
            console.log("You Win! Paper beats Rock.");
            ++humanScore;
            break;

        case "scissor-paper":
            console.log("You Win! Scissor beats Paper.");
            ++humanScore;
            break;

        case "rock-paper":
            console.log("You lose! Paper beats Rock.");
            ++computerScore;
            break;

        case "paper-scissor":
            console.log("You lose! Scissor beats paper.");
            ++computerScore;
            break;

        case "scissor-rock":
            console.log("You lose! Rock beats scissor");
            ++computerScore;
            break;
    }

    if (humanScore > computerScore) {
        return 1;
    } else if (computerScore > humanScore) {
        return 2;
    } else {
        return 0;
    }
}



function playGame() {
let humanScore = 0;
let computerScore = 0;

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();


let generalScore = playRound(humanSelection, computerSelection);
if (generalScore === 1) {
    ++humanScore;
} else if (generalScore === 2) {
    ++computerScore;
}



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
generalScore = playRound(humanSelection, computerSelection);
if (generalScore === 1) {
    ++humanScore;
} else if (generalScore === 2) {
    ++computerScore;
}



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
generalScore = playRound(humanSelection, computerSelection);
if (generalScore === 1) {
    ++humanScore;
} else if (generalScore === 2) {
    ++computerScore;
}



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
generalScore = playRound(humanSelection, computerSelection);
if (generalScore === 1) {
    ++humanScore;
} else if (generalScore === 2) {
    ++computerScore;
}



humanSelection = getHumanChoice();
computerSelection = getComputerChoice();
generalScore = playRound(humanSelection, computerSelection);
if (generalScore === 1) {
    ++humanScore;
} else if (generalScore === 2) {
    ++computerScore;
}



if (humanScore > computerScore) {
    console.log("You Won the game!");
} else if (computerScore > humanScore) {
    console.log("You lost the game!");
} else {
    console.log("It's a tie");
}
}


playGame();