// Create a function named getComputerChoice;
function getComputerChoice() {
    
/* Use the Math.random to generate a random number, then put it inside the 
# Math.floor to round it, and then multiply the randomly generated number    
# with 3 inside the Math.floor function then add 1.

# Store the randomly generated number from the above sequence inside a variable
# called randomNumber. */

let randomNumber = Math.floor(Math.random() * 3) + 1;

if (randomNumber === 1) {
    return "Rock";
} else if (randomNumber === 2) {
    return "Paper";
} else {
    return "Scissor";
}

}


function getHumanChoice() {

    const choice = prompt("Choose between rock, paper and scissor!, (all lowercase)", "");
    return choice;
}



