// this is the coercion of data

// this refers to the automatic conversion of values from one datatype to another

let x;
console.log(x, typeof x); // the output will be undefined , undefined
x = 6;
console.log(x, typeof x); // output will be 6 and a number
x = x + ""; // here we have added number to a string hence conver the value of x from a number to a string
console.log(x, typeof x); // output will be 6 and a string

x = x - 2; // here the value of x will automatically convert back to a number
console.log(x, typeof x); //4 number
// converting it to a boolean form by appllying not

x = !x; // we have converted this to a boolean form
console.log(x, typeof x); // false boolean

// you can also turn  number to a boolean through the following
console.log(Boolean(5)); // it will output true

// all numbers are true except zero which is false
console.log(Boolean(0)); // it will output as false

// you can also convert a null data type as null and it will output as false
console.log(Boolean(null)); // this will output as false
 // undefined willa also output as false
 console.log(Boolean(undefined));// output will return as false
 
