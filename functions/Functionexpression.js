/**
 * javascript treats functions as an object
 *
 *how to work with variables  global local variables
 *
 */

// function expression
let add = function (car1, car2) {
  //this function right now does not have a name (anonymous function) but its assigned to add
  return car1 + car2; // returns the value add
};

// you can also reassign the value  of of add to another key
let beastCars = add;
let favCars = beastCars("Mercedes", "ford");
console.log(favCars);
// when we try to print the value of beastcars it will bring the value as function that is called add [Function: add]
console.log(beastCars);

// global variables and local variables

let instagramUser = "hello ian"; // this a global variables which can be accessed across the code with hoisting
const Instagram = (User) => {
  // here this is a local variable that can only be used inside the variable
  let num = 34; // this is also a local variable which is only  accessible inside the function
  console.log(num); // here we have called it

  console.log(instagramUser); // here we have called the global variable and no error has been found
  return `hello ${User}`; // here we are returning the value of user
};
//{ console.log(num)};// when we try accessing it from here its  impossible this is the error{ReferenceError: num is not defined}

let users = Instagram(instagramUser);
console.log(users);

// another trick

function multiply(num1, num2, num3 = 10) {
  // we have put a default value in the parameter in case there is no return value in the return statement
  return num1 * num2 * num3; // you can also dictate what to return in your function
  //   return num1*num2;
}
console.log(multiply(4, 5, 6)); // here is the first output

let results = multiply(5, 40, 5);
console.log(results); // this outputs the same value since we have reassigned the valued of function multiply to results

// lets reassign the value of results
results = multiply(3, 4);
console.log(results); // this will bring an error since there is no third value  to escape this you can give the third value as a default value in the parameters

// when you pass the value it will override the default value
// lets try it
results = multiply(567, 5, 34); // here wa have override the default value so it will automatically take the value we have given it
console.log(results);
// function expression

const sum1 = function () {
  let x = 2 + 7;

  console.log("the sum is" + x);
};
sum1();
// functions declaration

function sum() {
  let x = 2;
  let y = 2;
  let result = x + y;
  console.log("the sum is" + result);
}
sum();



// parameters and arguments

function areaOfRectangle(width = 4, length = 2) {
  let area = length * width;
  return "the area of a rectangle is " + area;
}

console.log(areaOfRectangle());

