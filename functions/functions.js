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
  // when you declare the parameter first and the function itself has no valueas it'll just take the values declared
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

const hello = ()=> 'hello world';
let yooow = greetings => {} // when the parameter is one there is no need of brackets 
let yoow = (greetings, slang)=>{ 
} // when the parameters are more than one you have to include paranthesis
    
let areOfCircle = radius => 3.42 * radius**// when using the arrow functions you don have to include brackets hence the code is shorter

let myDream = (grace, success) => {
  return `My dream is to achieve ${grace} with ${success}.`;
};

console.log(myDream('grace', 'success'));


