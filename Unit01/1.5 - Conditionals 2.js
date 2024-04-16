// Declared initial and required prompt
const prompt = require('prompt-sync')();

// Ask the user for their name and store it in user_name
const user_name = prompt("Please enter your name: ");

// Prompt the user for their age
let age = parseInt(prompt("Hello " + user_name + ", how old are you? "));

// Check if the user is old enough to drive
if (age >= 16) {
    console.log("You are old enough to drive.");
} else {
    console.log("You are not old enough to drive yet.");
}

// Show menu
console.log("1 - Play\n2 - Options\n3 - DLC\n4 - Check for Updates\n5 - Exit");

// Ask for selection
let selection = parseInt(prompt("Hi " + user_name + ". Please make a selection "));

// Output based on user selection
switch (selection) {
    case 1:
        console.log("Let's play!");
        break;
    case 2:
        console.log("You selected Options.");
        break;
    case 3:
        console.log("No new DLC at this time.");
        break;
    case 4:
        console.log("Everything is up to date.");
        break;
    case 5:
        console.log("Bye!");
        break;
    default:
        console.log("Invalid selection.");
}

// Print the Nemo emoji
console.log("🐠");

// Ask the user to enter an hour between 0-23
let hour = parseInt(prompt("Please enter the hour (0-23): "));

// Check the hour and output the appropriate greeting
if (hour >= 0 && hour <= 11) {
    console.log("Good morning!");
} else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon!");
} else if (hour >= 18 && hour <= 23) {
    console.log("Good evening!");
} else {
    console.log("Invalid hour!");
}

// Generate a random single-digit value
let random_number = Math.floor(Math.random() * 10);

// Output if the value is zero
if (random_number === 0) {
    console.log("The random number is zero.");
}

// Output if the value is even
if (random_number % 2 === 0) {
    console.log("The random number is even.");
}

// Output if the value is divisible by 2 AND 3
if (random_number % 2 === 0 && random_number % 3 === 0) {
    console.log("The random number is divisible by 2 and 3.");
}

// Output if the value is prime
let is_prime = true;
if (random_number === 1 || random_number === 0) {
    is_prime = false;
} else {
    for (let i = 2; i <= Math.sqrt(random_number); i++) {
        if (random_number % i === 0) {
            is_prime = false;
            break;
        }
    }
}
if (is_prime) {
    console.log("The random number is prime.");
}