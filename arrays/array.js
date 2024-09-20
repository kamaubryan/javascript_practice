// functions declaration

function sum() {
  let x = 2;
  let y = 2;
  let result = x + y;
  console.log("the sum is" + result);
}
sum();
// function expression

const sum1 = function () {
  let x = 2 + 7;

  console.log("the sum is" + x);
};
sum1();

// parameters and arguments

function areaOfRectangle(width = 4, length = 2) {
  let area = length * width;
  return "the area of a rectangle is " + area;
}

console.log(areaOfRectangle());

// Arrays methods

let ages = [20, 30, 25, 24, 28, 19];

console.log(ages.length); //returns the array length nb
console.log(ages[4]); // returns the age 28
console.log(ages.slice(1)); //returns the copy of the remainder of the array withou the sliced digit

console.log(ages.splice(1));
console.log(ages);

// console.log(ages);
