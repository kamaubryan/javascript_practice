/*
this is when you want to iterate over certain objects while checking if they meet certain conditions
it uses a concept where if a certain condition is true  it goes to the next
*/

let num = 31; // we have initialized the number
while (num % 2 === 0) {
  // given it a condition if the number is when divided by two and the remainder is 0 to print the number is even
  console.log("this is an even number");
  break; // remember to always put a break since it will continue to output the number continually without stopping
}
console.log(num, typeof num);

// we can try to check if the number is also odd

let num1 = 47;
while (!num % 2 === 0) {
  console.log("this is an odd number");
  break;
}
console.log(num1, typeof num1);

// you can also use if else in a while loop

let number = 23;
while (true) {
  if (number % 2 === 0) {
    console.log(`${number} is an even number`);
  } else {
    console.log(`${number} is an odd number`);
  }
  break; // always remember to break on avoid infinity
}

// lets print a couple of the same info without repeating the same syntax
num = 1;
while (num <= 10) {
  console.log("hey there you look good today");
  num++;
  // break; { you shouldn't put a break while incrementing or decrementing since it wont output everything}
}

// example 3
let text = ""; // here the text is null
let i = 0;
while (i <= 10) {
  text += " the number is " + i; // this text is outputed until the value of i is ten
  //{  console.log(text);} //{ when you output here it will output the same but with a difference where it will output with each incrementing}
  // this is the output below
  /*
   the number is 0
 the number is 0 the number is 1
 the number is 0 the number is 1 the number is 2
 the number is 0 the number is 1 the number is 2 the number is 3
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6 the number is 7
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6 the number is 7 the number is 8
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6 the number is 7 the number is 8 the number is 9
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6 the number is 7 the number is 8 the number is 9 the number is 10

  */
  i++;
}
console.log(text);
// the output while its put here
/*
 the number is 0 the number is 1 the number is 2 the number is 3 the number is 4 the number is 5 the number is 6 the number is 7 the number is 8 the number is 9 the number is 10
*/
