// function declaration;

function car() {
  console.log("beamer is a nice car");
}

car(); //this is what we call javascript declaration where a function with a name cane be called anywhere even before its defined

// hoisting in javascript declaration

// greet();
//  hoisting involves the calling of a function even before its declared. it only happens on javascript declaration.
function greet() {
  console.log("hello there");
}

// greet();
function greet(name) {
  console.log(`hello there: ${name}`); // note better  you have to use the `` in order to get the results
}

greet("Brian");

// function expressions

let luxury = function (car = "benz") {
  // when you declare the parameter first and the function itself has no values it'll just take the values declared
  // functions expressions involves the use of making a variable name with the function details.
  console.log(`my type of luxury is ${car}`);
};
luxury("mercedes");

let calcArea = function (length, width) {
  return length * width;
  //   console.log(area);
};
const calculations = calcArea(3, 4); // you have to assign the function a new value
// console.log(calcArea());
console.log(calculations);

// arrow functions
// while using arrow functions you dont need to use the return statement

const hello = () => "hello world";
let yooow = (greetings) => {}; // when the parameter is one there is no need of brackets
let yoow = (greetings, slang) => {}; // when the parameters are more than one you have to include paranthesis

let areOfCircle = (radius) => 3.42 * radius * radius; // when using the arrow functions you don have to include brackets hence the code is shorter

console.log(areOfCircle(7));
let Grace = "Gods Grace";
let freedom = "Financial freedom";
const Happiness = (Grace, freedom) => {
  return Grace + freedom; // you cant return twice
};
console.log(`Real Happiness is defined by ${Grace} and ${freedom}`); // this template literals
let beingHappy = Happiness(Grace, freedom);
console.log(beingHappy);

// lets call a function and pass a value to it
const Kamau = (user) => {
  // here we have accepted the user as a parameter
  return `hello ${user}`; // then later we have returned  and called the same value
};
let user = "kiriro"; // here we have defined the value to be kiriro
console.log(Kamau(user));

// using an arrow function without a return statement

let kiriros = (firstWife, secondWife) => firstWife + secondWife;// here I have already returned the statement without actually using the return statement
let kiriro = kiriros("wanjiku", "wairimu");// here I have reassigned the function to a value value called kiriro
console.log(kiriro);

// lets check if we can  reassign a function since its not a const

kiriros = (child1, child2, child3, child4, child5)=> child1+child2+child3+child4+child5;// here we have just reassigned the value of the function kiriros to another value but if we used the const keyword this wolud be impossible
 // spice this up with a for loop inorder to print all
 for(let i=0; i<kiriros.length;i++){
  console.log(kiriros(i));
  // well check this via chatgpt
 } 
let kiriroKids= kiriros("teresia", "susan", "ann","wairimu", "njihia");
console.log(kiriroKids);

 