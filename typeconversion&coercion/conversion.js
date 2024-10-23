// this involves the turning of data probably from string to a number and from a string to a boolean

let num = 15;
console.log(typeof num); //  the type of num is a number

// there is a another way of displaying the num

num = 12;
console.log(num, typeof num); // this displays the number itself and the type of number   '12  number'

// converting num to string format

num = String(13); // here we have converted num to a string format
console.log(num, typeof num);// it will output the same output 

num = "13"; // this will also output the type as a string format
console.log(num, typeof num); // output is 13 and a string
// here is also another way of converting to boolean data type
 num = Boolean("1234"); // when you wrap an output with the type of data it automatically changes  the output to that datatype.
 console.log(num, typeof num);// the output will be true because its a boolean
 num = Boolean(0);
 console.log(num, typeof num);