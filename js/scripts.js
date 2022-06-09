// function add (number1, number2) {
//   return number1 + number2;
// }

// const number1 = parseInt(prompt("enter a number!"));
// const number2 = parseInt(prompt("enter another number!"));

// window.alert(add(number1, number2) + " is my addition alert");

// function multiply (num1, num2) {
//   return num1 * num2;
// }

// const num1 = prompt("enter a number here!");
// const num2 = prompt("enter another number");

// window.alert(multiply(num1,num2) + " is my multiplication alert");

// function divide (example1, example2) {
//   return example1 / example2;
// }

// const example1 = prompt("enter a number!");
// const example2 = prompt("enter another number!");

// window.alert(divide(example1, example2) + " is my division alert.");

// window.alert("The addition of your numbers equals " + add(number1, number2) + ". The multiplication of your numbers equal " + multiply(num1, num2) + ". The division of your numbers equal " + divide(example1, example2) + ".");

//"2 + 1 = 3, 2 - 1 = 1, 2 * 1 = 2, and 2 / 1 = 2".




//window.alert("The addition of first number" + number1 + "and" "equals " + add(number1, number2) + ". The multiplication of your numbers equal " + multiply(num1, num2) + ". The division of your numbers equal " + divide(example1, example2) + ".");


function add (number1, number2) {
     return number1 + number2;
   }

function subtraction (number1, number2) {
    return number1 - number2;
  }

function divide (number1, number2) {
    return number1 / number2;
  }

function multiply (number1, number2) {
    return number1 * number2;
  }

const number1 = parseInt(prompt("enter a number!"));
const number2 = parseInt(prompt("enter another number!"));

//window.alert("The addition of your numbers equals " + add(number1, number2) + ". The multiplication of your numbers equal " + multiply(number1, number2) + ". The division of your numbers equal " + divide(number1, number2) +"  . The subtraction of your numbers equal " + subtraction(number1, number2) + ".");

window.alert(number1 + "+" + number2 + "=" + add(number1, number2) + "," +number1 + "*" + number2+"="+ multiply(number1, number2) + "," + number1 + "/" + number2+"="+ divide(number1, number2) +","+ number1 + "-" + number2+"=" + subtraction(number1, number2) + ".");

//"2 + 1 = 3, 2 - 1 = 1, 2 * 1 = 2, and 2 / 1 = 2".