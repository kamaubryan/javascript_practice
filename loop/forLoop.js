/*
this also works like others  but the condition is on the saame line
*/

let x = 0;
text = "";
for (x; x <= 10; x++) {
  // the condition is only on this line
  text += "the number is" + x;
}
console.log(text);

// example 2
x = 1;
for (x; x <= 20; x++) {
  console.log(x);
}
console.log(x); // this outputs 21 since the following number after the iteration is over
// nested loops
let month;
let year;
for (year = 0; year <= 1; year++) {
  // this the first loop whereby the year iterates on one year to the next
  console.log(`this is year ${year}`); // it prints the year
  for (month = 1; month <= 12; month++) {
    // the inside loop where in each and every year it prints the months in each iteration
    console.log(`this is month ${month}`);
  }
}
