let humanScore = 0;
let computerScore = 0;

// Create a function named getComputerChoice;
function getComputerChoice() {
    
/* Use the Math.random to generate a random number, then put it inside the 
# Math.floor to round it, and then multiply the randomly generated number    
# with 3 inside the Math.floor function then add 1.

# Store the randomly generated number from the above sequence inside a variable
# called randomNumber. */

let randomNumber = Math.floor(Math.random() * 3) + 1;

console.log(randomNumber);
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
console.log(humanChoice);

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
            humanScore++;
            break;

        case "paper-rock":
            console.log("You Win! Paper beats Rock.");
            humanScore++;
            break;

        case "scissor-paper":
            console.log("You Win! Scissor beats Paper.");
            humanScore++;
            break;

        case "rock-paper":
            console.log("You lose! Paper beats Rock.");
            computerScore++;
            break;

        case "paper-scissor":
            console.log("You lose! Scissor beats paper.");
            computerScore++;
            break;

        case "scissor-rock":
            console.log("You lose! Rock beats scissor");
            computerScore++;
            break;
    }

}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

