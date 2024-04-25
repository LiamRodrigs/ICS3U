// Declared initial and required prompt
const prompt = require('prompt-sync')();

// Ask the user for their age
const user_age = parseInt(prompt("Please enter your age: "));

// Check if the user's age qualifies for senior discount or if they are too young to drive
if (user_age >= 50) {
    console.log("You qualify for the senior discount!");
} else if (user_age < 16) {
    console.log("You're not old enough to drive yet.");
}

// Ask the user for their name and store it in a variable called user_name
const user_name = prompt("Please enter your name: ");

// Check if the user's name is "Mr. J" and print the Nemo emoji if true
// Check if the user's name is longer than 7 characters and print a message if true
if (user_name == "Mr. J") {
    console.log("🐠");
} else if (user_name.length > 7) {
    console.log("You have a long name.");
}

// Ask the user how long their name is (how many characters)
const name_length = parseInt(prompt("How long is your name? (Enter the number of characters): "));

// Check if the user's input matches the length of their name and print the result
if (name_length == user_name.length) {
    console.log("That's correct! ✔️");
} else if (name_length > user_name.length) {
    console.log("Too high ✖️");
} else {
    console.log("Too low ✖️");
}

// Check if the user's age is even or odd and print the result
if (user_age % 2 == 0) {
    console.log("Your age is an even number.");
} else {
    console.log("Your age is an odd number.");
}
