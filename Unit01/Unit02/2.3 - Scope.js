
// local variable
function myFunction(localVar1) {
  let localVar2 = "";
}
// Code with different types of scope including global and local as well 
function myFunction() {
  let localVar = "num1 && num2";
  return true;
}

// outputting the official value of localvar to the console
console.log("This is the value of localvar:", localVar);


// letting a global variable be equivalent to the value of 5 
let my_global_variable = 5;

// equating func sample to equal true 
function sample() {
  let func_variable = true;  

  if (func_variable) {
    let scope_variable = "I'm very local";  
    console.log(scope_variable);

  }  
}  

let x = 5

function foo() {
  let x = 99;    
  console.log(x);
}

function bar() {
  console.log(x);
}

console.log(x)
foo()
bar()

// code with correct scope that does indeed work
let globalVar = ""; // global variable

function myFunction(localVar1) {
  let localVar2 = ""; // local variable

  // localVar1 is accessible here because it is a parameter of the function
  console.log(localVar1);

  // localVar2 is also accessible here because it is declared in the same function
  console.log(localVar2);
}

myFunction("hello"); // logs "hello" and ""

// code with incorrect scope that does not work what so ever
let my_global_variable = ""; // global variable

function myFunction() {
  let localVar = "hello"; // local variable
}

console.log(localVar); // Uncaught ReferenceError, localVar is not defined

// adding water temp as the ultimate string
function hotWater() {
  let waterTemp = "cold";
  if (waterBoilerSwitch(waterTemp) == false){
    waterBoilerSwitch(waterTemp);
    
  }
  return waterTemp;
}

function waterBoilerSwitch(waterTemp){
  if (waterTemp == "cold") {
    waterTemp = "hot";
    return true;
  } else {
    waterTemp = "cold";
    return false;
  }
}