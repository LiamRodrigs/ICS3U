// Declared initial and required prompt
const prompt = require('prompt-sync')();

// Ask the user if they want to play the game
let playGame = prompt("Do you want to play a game? (y/n): ");

// Check if the user wants to play the game
if (playGame.toLowerCase() === 'y') {
    // Ask the user to enter the first number
    let firstNumber = parseInt(prompt("Enter a number: "));
    
    // Check if the number is greater than 10 and less than 50
    if (firstNumber > 10 && firstNumber < 50) {
        console.log("Your next number should be greater than 50.");
    }
    
    // Ask for the second number
    let secondNumber = parseInt(prompt("Enter another number: "));
    
    // Check if the second number is even or odd
    if (secondNumber % 2 === 0) {
        console.log("Your next number should be odd.");
    } else {
        console.log("Your next number should be even.");
    }
    
    // Ask for the third and final number
    let thirdNumber = parseInt(prompt("Enter the final number: "));
    
    // Check if the set of numbers is Squirrelly
    if ((firstNumber + secondNumber + thirdNumber + 1) % 10 === 0) {
        console.log("Your numbers are Squirrelly!");
    } else {
        console.log("Your numbers are not Squirrelly.");
    }
    
    // Check if the set of numbers is Jazzy
    if (firstNumber % 3 === 0 || secondNumber % 3 === 0 || thirdNumber % 3 === 0) {
        console.log("Your numbers are Jazzy!");
    } else {
        console.log("Your numbers are not Jazzy.");
    }
} else {
    console.log("Maybe next time then!");
}

// Check if the user wants to play the game
if (playGame.toLowerCase() === 'y') {
    // Ask the user to enter the first number
    let firstNumber = parseInt(prompt("Enter a number: "));
    
    // Check if the number is greater than 10 and less than 50
    if (firstNumber > 10 && firstNumber < 50) {
        console.log("Your next number should be greater than 50.");
    }
    
    // Ask for the second number
    let secondNumber = parseInt(prompt("Enter another number: "));
    
    // Check if the second number is even or odd
    if (secondNumber % 2 === 0) {
        console.log("Your next number should be odd.");
    } else {
        console.log("Your next number should be even.");
    }
    
    // Ask for the third and final number
    let thirdNumber = parseInt(prompt("Enter the final number: "));
    
    // Check if the set of numbers is Squirrelly
    if ((firstNumber + secondNumber + thirdNumber + 1) % 10 === 0) {
        console.log("Your numbers are Squirrelly!");
    } else {
        console.log("Your numbers are not Squirrelly.");
    }
    
    // Check if the set of numbers is Jazzy
    let jazzyCount = 0;
    if (firstNumber % 3 === 0) {
        jazzyCount++;
    }
    if (secondNumber % 3 === 0) {
        jazzyCount++;
    }
    if (thirdNumber % 3 === 0) {
        jazzyCount++;
    }
    if (jazzyCount >= 2) {
        console.log("Your numbers are Jazzy!");
    } else {
        console.log("Your numbers are not Jazzy.");
    }
} else {
    console.log("Maybe next time then!");
}