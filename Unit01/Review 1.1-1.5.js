// Ask the user to enter a temperature
let user_input = prompt("Enter a temperature like 30C or 120F:");

// Convert input to all uppercase
user_input = user_input.toUpperCase();

// Get the last character of the input and save it in a variable
let unit = user_input.slice(-1);

// Convert the input to a number
let temperature = parseInt(user_input);

// Check if the last character is "C" for Celsius or "F" for Fahrenheit
if (unit == "C") {
    // Convert Celsius to Fahrenheit
    let converted_temperature = (temperature * 9 / 5) + 32;
    // Round the answer to one decimal place
    converted_temperature = converted_temperature.toFixed(1);
    // Output the converted temperature
    console.log(converted_temperature + "F");
} else if (unit == "F") {
    // Convert Fahrenheit to Celsius
    let converted_temperature = (temperature - 32) * 5 / 9;
    // Round the answer to one decimal place
    converted_temperature = converted_temperature.toFixed(1);
    // Output the converted temperature
    console.log(converted_temperature + "C");
} else {
    // Output "Error!" if the last character was something other than "C" or "F"
    console.log("Error!");
}
