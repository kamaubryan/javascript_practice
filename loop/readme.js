/**
 * this explains where to use for loop and when to use while loop
 *
 *
 *
 */

///  this is the for loop example

for (let i = 1; i <= 100; i++) {
  // here it checks the numbers and iterates over the numbers
  if (i % 2 === 0) {
    // here theres a condition where it only prints the even numbers

    console.log(`${i} is an even number`);
  } else {
    // it also prints the odd numbers hence loop is a good for iterating through numbers
    console.log(`${i}is an odd number`);
  }
}

// while loop example;

// trying the long manner
let num = 657893;
console.log(num % 10);// here we are dividing the number and the remainder of ten so it produces the last number of the equation
num = parseInt(num / 10);// this converts the output from a float to a number
console.log(num);// prints the number that is left

console.log(num % 10);
num = parseInt(num / 10);
console.log(num);

console.log(num % 10);
num = parseInt(num / 10);
console.log(num);

console.log(num % 10);
num = parseInt(num / 10);
console.log(num);

console.log(num % 10);
num = parseInt(num / 10);
console.log(num);


// we can do the above work in a very easy way
num=4389859;
while(num>0){// we have used a while loop where we are printing every single number in a line hence while is the better way in this.
  
  console.log(num%10);
  num= parseInt(num/10)
  
}
