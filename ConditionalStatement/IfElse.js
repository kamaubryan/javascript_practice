/*
 if else statements ,, they work based on  conditions
 a condition has to meet a certain condition to be executed
*/

let num1 = 7;
let num2 = 8;
let result = num1 > num2;

if (result) {
  // the rule of booleans is applied here
  console.log("true"); // this checks if the answer is true
} else {
  console.log("false"); // this checks if the answer is false // the output will be false since as declared above num1 is less than num2
}
result = num1; // here we have reassigned the value of result to num1
if (result % 2 === 0) {
  // this checks if the number that result is given is either odd or even
  console.log("your number is even");
} else {
  console.log("your number is odd");
}

// else if statement

let number1 = 7, // here we have declared three variables in one line to avoid redundancy
  number2 = 10,
  number3 = 13;

// here we use the if else statement to check which number is the greatest.
// we have to use the logical operator to check which number is the greatest and both conditions have to be met in order to execute the statement

if (number1 > number2 && number1 > number3) {
  // we have to use the and logical operator since both conditions have to be true inoder to execute the statements
  console.log("number1 is the greatest number here", number1);
} else if (number2 > number1 && number2 > number3) {
  // here we are checking if number is the greatest and the two conditions have to be met
  console.log("number 2 is the greatest here", number2);
} else if (number3 > number1 && number3 > number1) {
  // in this case to avoid all these syntax you can just write "else " and everything else will be executed as it should be
  // also the same is applied here
  console.log("number three is the greatest here", number3);
}
