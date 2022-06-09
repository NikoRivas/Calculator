function add (number1, number2) {
  return number1 + number2;
}

const number1 = parseInt(prompt("enter a number!"));
const number2 = parseInt(prompt("enter another number!"));

window.alert(add(number1, number2) + " is my addition alert");

function multiply (num1, num2) {
  return num1 * num2;
}

const num1 = prompt("enter a number here!");
const num2 = prompt("enter another number");

window.alert(multiply(num1,num2) + " is my multiplication alert");

function divide (example1, example2) {
  return example1 / example2;
}

const example1 = prompt("enter a number!");
const example2 = prompt("enter another number!");

window.alert(divide(example1, example2) + " is my division alert.");