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
let day = "";
do {
  day = "friday";
  console.log("today is friday hooray its weekend");
  break;
} while (day==="friday");
