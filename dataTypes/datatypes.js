//  there are several data types

let data = 19; // data type number

let user = "Brian"; // string data type

console.log(typeof data); // output is a number
console.log(typeof user); // output will be a string

// exponential

let num = 10e10;
console.log(num); // output will be 100000000000

// infinity
// positive infinity
let num1 = 2 / 0;
console.log(num1); // output is infinity

// theres negative infinity
let num2 = -5 / 0;
console.log(num2); // negative infinity

// in infinity  you can check the maximum and the minimum number

console.log(Number.MAX_VALUE, num1); // output is 1.7976931348623157e+308 Infinity
console.log(Number.MIN_VALUE, num1); // output is 5e-324 Infinity
console.log(Number.MAX_VALUE, num2); // output is 1.7976931348623157e308 - Infinity;
console.log(Number.MIN_VALUE, num2); // 5e-324 -Infinity

// strings

// you can add two strings

let firstName = "brian";
let lastName = "kamau";
let userName = firstName + " " + lastName;
console.log(userName); // brian kamau
// if you want to declare the name to be in two lines
let username = "brian \nkamau";
console.log(username); // the name is diplayed in two lines
// if you want to leave a space within the lines you can use this methods
let name = "brian\tkamau";
console.log(name); // theres a space between the name      brian   kamau

//boolean data types they return either the answer is true or false

let bool = 5 > 6;
console.log(bool); // answer is false

let msg = "";
console.log(msg); // this wont display anything
