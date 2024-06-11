/**
 * 3.1 - While Loops
 * Author: Liam Rodrigs
 * 
 * Lesson link: go.brash.ca/3U-3.1-While-Loops
 **/

'use strict';
// Return a random integer from min to max (inclusive)
function randInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
function random_until(min, max, stop) {
  if (max <= min) {
    return -1;
  }

  if (stop < min || stop > max) {
    return -1;
  }

  let randomNum;
  do {
    randomNum = randInt(min, max);
    console.log(randomNum);
  } while (randomNum!= stop);

  return stop;
}

console.log(random_until(1, 10, 5));

// In this function it there is a countdown within a sequence of numbers 
function countdown (start, stop){
  while (start > stop){
    console.log(start);
    start--;
    if (start < stop){
      return -1;
    }
  }
}
// Countdown is equated to the prompt of start and stop as well causing them to be subtracted from each other
countdown = (start - stop)

// In this function it there is a countdown within a sequence of numbers itself
let countdown = 0;

// Using a for loop with the variable x as the initial input
for (let x = start; x > stop; x--) {
    console.log(x);
    count++;
  }
  return count;

// A countdown of digits including 9 and 4
console.log(countdown(9,4));

// This function asks the user for (n) such values and then therefore based off of calculations to not rounded averages
function average(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    let value = prompt(`Please enter value ${i}/${n}`);
    sum += parseFloat(value);
  }
  let avg = sum / n;
  console.log(`The average is ${avg}`);
}

average(5);

const prompt = (require)
randInt (1>10)

let R = 1
let G = 2
let B = 3

let user_input = prompt(Value> R,G,B)

let calculateR = (1+0)
let CalculateG = (1+1)
let calculateB = (2+1)