// Declare initial prompt function
const prompt = require("prompt-sync")();

// Ask the user for their age
let age_str = prompt("Please enter your age: ");
let age = parseInt(age_str);

// Check age conditions and print appropriate messages
if (age >= 50) {
    console.log("You qualify for the senior discount!");
} else if (age < 16) {
    console.log("You're not old enough to drive yet.");
}

// Ask the user for their name
let user_name = prompt("Please enter your name: ");

// Check name conditions and print appropriate messages
if (user_name === "Mr. J") {
    console.log("🐠");
} else if (user_name.length > 7) {
    console.log("You have a long name.");
}

// Ask the user how long their name is
let name_length_str = prompt("How many characters long is your name?");
let name_length = parseInt(name_length_str);

// Check name length conditions and print appropriate messages
if (name_length === user_name.length) {
    console.log("That's correct! ✔️");
} else if (name_length > user_name.length) {
    console.log("Too high ✖️");
} else {
    console.log("Too low ✖️");
}

// Ask the user for their age
let age_str = prompt("Please enter your age: ");
let age = parseInt(age_str);

// Check if the age is even or odd using the modulo operator
if (age % 2 === 0) {
    console.log("Your age is an even number.");
} else {
    console.log("Your age is an odd number.");
}