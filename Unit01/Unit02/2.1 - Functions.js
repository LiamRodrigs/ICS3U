// Delcaring the actual function in whoAreYou
function whoAreYou() {

// Asking the user for thier own individual name, age, and lastly their favorite hobby
var name = prompt("What is your name?");
var age = prompt("What is your age?");
var hobby = prompt("What is your favorite hobby?");

// Storing the users answers and finally outputting the following specific code so, their is an replacement with the complete and total users associated with their individual answers
console.log("/nNice to meet you", + "name" + "!")
console.log("You're" + age + "years old and your favorite hobby is:" + hobby + ".")
}

whoAreYou();

// Creating a function called : tax_calculator in the currency of (dollars) solely
function tax_calculator(dollars) {
    // Calculate tax
    var tax = dollars * 0.13;
    
    // Calculate total amount with tax
    var totalAmount = dollars + tax;
    
    // Print the total amount with tax
    console.log("Total amount with tax 13% overall (in total compensation): $" + totalAmount.toFixed(2));
}

// Example usage:
tax_calculator(100); // You can pass any amount you want to calculate tax for

// Delcaring a function name calculator(operator) to identify tax calculations based off the two numbers that the user enters from a sole basis
function calculator(operator) {
    
//Prompt the user for two numbers
var firstNumber = prompt("Can you give me your first number option, no matter what range?")
var secondNumber = prompt("Can you give me your second number option, no matter what range?")
}
    let result;

    // Perform the calculation based on the operator
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        // Check if the second number is not zero to avoid division by zero error
        if (num2 !== 0) {
            result = num1 / num2;
        } else {
            result = "Error: Division by zero!";
        }
    } else {
        result = "Error: Invalid operator!";
    }

    // Print the result
    console.log(`The result of ${num1} ${operator} ${num2} is: ${result}`);

// Test the function
let operator = prompt("Enter the operator (+, -, *, /):");
calculator(operator);

// Define the pythagorean function
function pythagorean(legA, legB, hypotenuse) {
    // Check which side is missing
    if (hypotenuse === false) {
        // Solve for the hypotenuse
        let calculatedHypotenuse = Math.sqrt(legA**2 + legB**2);
        console.log(`The hypotenuse is: ${calculatedHypotenuse}`);
    } else {
        // Solve for the missing leg
        if (legA === null) {
            let calculatedLegA = Math.sqrt(hypotenuse**2 - legB**2);
            console.log(`The length of legA is: ${calculatedLegA}`);
        } else if (legB === null) {
            let calculatedLegB = Math.sqrt(hypotenuse**2 - legA**2);
            console.log(`The length of legB is: ${calculatedLegB}`);
        }
    }
}

// Test the function
pythagorean(9, 16, false);