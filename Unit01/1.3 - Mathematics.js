// Declare variables and set initial values
let celsius = 100;
let fahrenheit = 0;

// Add 2 to celsius
celsius += 2;

// Convert Celsius to Fahrenheit using the formula: (°C × 9/5) + 32
fahrenheit = (celsius * 9/5) + 32;

// Output the value of fahrenheit to the console
console.log(fahrenheit);

// Set the variable fahrenheit to 77
fahrenheit = 77;

// Convert Fahrenheit to Celsius using the formula: (°F - 32) * 5/9
celsius = (fahrenheit - 32) * 5/9;

// Output the current value of celsius to the console
console.log(celsius);

// Print the conversion 
console.log(fahrenheit + " degrees Fahrenheit is " + celsius + " degrees Celsius.");

// Define the coordinates of points A and B
let x1 = -4;
let y1 = 5;
let x2 = 6;
let y2 = 0;

// Calculate the slope
let m = (y2 - y1) / (x2 - x1);

// Print the value of m to the console
console.log("The slope of the line passing through points A(-4, 5) and B(6, 0) is: " + m);