// Declared variable for prompt() enabling to run code in sync
const prompt = require("prompt-sync")();

// Task 1/2

// Printing a line of emojis using the number that the user entered in form of length
function printLine() {
  prompt("Enter a number?", (answer) => {
    const num = parseInt(answer);
    
    if (num < 0) {
      console.log('Bye!');
      return;
    }

    const emoji = "☣"; 
    const line = emoji.repeat(num);
    console.log(line);
    
    printLine(); // Ask again in an repeated fashion
  });
}

// Adding the function of printline so, that it reads to the actual console with the user inputting
printLine();

// A constant of emojis with a specific selection for the user to choose from in a particular setting
const emojis = [
  "😄", "😎", "🌟", "🎉", "🍕", "🚀", "💡", "🎈" 
];

// Enabling a dropdown menu for the user to select one from the list
function printMenu() {
  console.log("Select an emoji from the list:");
  emojis.forEach((emoji, index) => {
    console.log(`${index + 1}. ${emoji}`);
  });
}

// Task 2/2

// Enabling for the user that the number entered to be in the form of a square and asking them the primary question
function printSquare() {
  while (true) {
      let size = parseInt(prompt("How big is the square?"));
      if (size <= 0 || isNaN(size)) {
          console.log("Bye!");
          break; // collapsing input required
      }
      let square = "";
      for (let i = 0; i < size; i++) {
          square += "⚽".repeat(size) + "\n";
      }
      console.log(square);
  }
}

printSquare(); // Printing it to the actual console

// Challenges

function print_outline(){

  function printOutline() {
    while (true) { // Start an infinite loop
        let size = parseInt(prompt("How big is the square?")); // Ask user for the size of the square
        if (size <= 0 || isNaN(size)) { // Check if size is less than or equal to 0 or not a number
            console.log("Bye!"); // Print "Bye!" and exit the loop
            break;
        }
        let outline = ""; // Initialize an empty string to store the outlined square
        for (let i = 0; i < size; i++) { // Perform over each row
            for (let j = 0; j < size; j++) { // Perform over each column
                if (i == 0 || i == size - 1 || j == 0 || j == size - 1) {
                    outline += "⚽"; // On the outline, using the ⚽ emoji
                } else {
                    outline += "🏈"; // Using 🏈 emoji for the middle
                }
            }
            outline += "\n"; // Add a newline after each row
        }
        console.log(outline); // Print the outlined square
    }
}

printOutline(); // Calling the function to start the process
}

function printDiamond() {
  while (true) { // Start an infinite loop
      let width = parseInt(prompt("How wide is the diamond?")); // Ask user for the width of the diamond
      if (width <= 0 || isNaN(width) || width % 2 == 0) { // Check if width is less than or equal to 0, not a number, or even
          console.log("Invalid input! Width must be a positive odd number."); // Print error message and re-prompt
          continue;
      }
      for (let i = 1; i <= width; i += 2) { // Loop through each row of the top half of the diamond
          let spaces = " ".repeat((width - i) / 2); // Calculate the number of spaces needed
          let balls = "⚽".repeat(i); // Calculate the number of ⚽ needed
          console.log(spaces + balls); // Print the row
      }
      for (let j = width - 2; j >= 1; j -= 2) { // Loop through each row of the bottom half of the diamond
          let spaces = " ".repeat((width - j) / 2); // Calculate the number of spaces needed
          let balls = "⚽".repeat(j); // Calculate the number of ⚽ needed
          console.log(spaces + balls); // Print the row
      }
      break; // Exit the loop
  }
} printDiamond.length(); 

printDiamond(); // Call the function to start the process