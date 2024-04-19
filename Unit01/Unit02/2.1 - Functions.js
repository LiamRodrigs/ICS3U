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

function calculator(operator) {
var firstNumber = prompt("Can you give me your first number option, no matter what range?")
var secondNumber = prompt("Can you give me your second number option, no matter what range?")
}