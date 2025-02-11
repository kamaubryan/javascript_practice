// how to store data in variables

// storing data in variables is essentiall to avoid repetition of naming

//for example;

console.log(2 + 5);
// when we want to add other numbers on the LIST you have to repeat the number,,,, lets say you want to add another 7

console.log(2 + 5 + 7); // we have repeated ourselves

// here we have named the variables num to avoid the repetition and right now we have num assigned to seven
let num = 2 + 5;
console.log(num);

// if we want to add anothe number you can just add the number to num

console.log(num + 7);

let username = "brian"; // while assigning variables you should specify if its a string since this line of code will bring an error
// brian is not defined!!!!!!.
console.log(username);

let user = "brian"; // we have already declared the variable in string form
console.log(user);

// you can reassign a variable

let number = 3; // here we have assigned the var number as 3
console.log(number); // the output will be 3.

number = 5; // we have reassigned the var number to 5.
console.log(number); // the output will be 5

// while naming variables with two names you can use two methods for readability issues

// using the snake case rule ,,,, using the underscore

let first_name = "Brian";

// using the camel case naming method.

let lastName = "kamau";

// when you want to make suree a certain variable cant change you use the  const naming

// lets say you have a variable like pi which doesnt change \

const pi = 3.142; // this doesnt change;

let radius = 5;

// you can the value of radius

radius = 10;

// radius can change depending on the size of a circle
let area = pi * radius * radius; // this cant also change
// console.log(area);

console.log(area);
