/*
do(the code to output)
while( the condition)
*/

let text = ""; // the text is null
let i = 10;
do {
  text += "the number is" + i; // the output is outputed when it meets the condition below
  i--;
} while (i >= 0); // this is the condition
console.log(text);

// example 2
let day = ""; // the  initial value of day is empty at the moment
do {
  day = "friday";
  console.log("today is friday hooray its weekend");
  break;
} while (day === "friday");

// lets check on an array

let days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

let x = 0;

do {
  console.log(`Today is ${days[x]}`);
  if (days[x] === "Tuesday") {
    console.log("Oh shit, the week is not yet over!");
  }

  x++; // Move to the next day
  // break;
} while (x < days.length);
