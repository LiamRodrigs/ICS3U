// Declared initial and required prompt
const prompt = require('prompt-sync')();

console.log("1.4 - User Input");

// Asking for the year of birth
let yearOfBirth = prompt("What year were you born? >");
console.log("You entered " + yearOfBirth);
let currentYear = new Date().getFullYear();
let age = currentYear - yearOfBirth;
console.log("You are likely " + age + " years old");

// Asking for the name
let name = prompt("What is your name? >");
console.log("Hi, " + name + ". You were born in " + yearOfBirth + " and you are likely " + age + " years old.");

// Printing the length of the name
console.log("Your name is " + name.length + " letters long.");

// Converting temperature from Fahrenheit to Celsius
let fahrenheit = prompt("Enter temperature in Fahrenheit: ");
let celsius = (fahrenheit - 32) * (5 / 9);
console.log("Temperature in Celsius: " + celsius.toFixed(2));