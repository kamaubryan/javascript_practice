/*
this involves the comparison of values
the output is always a boolean value either true or false
*/

console.log(5 == 6); // this will output as false
console.log(5 < 6); // this will output as true

// we can also check when you have already assigned a value like the example below

let result = 6 > 2;
console.log(result, typeof result); // this outputs as a boolean value which us true or false

result = 6 >= 2; // we have used the greater than or equal to and this checks if its less or equal to
console.log(result); // this outputs true

// we try string  values
// this checks the ascii values which am yet to check ,,,, ill come to give some feedback

let y = "helo";
let m = "helagiuh";
let data = y > m;
console.log(data, typeof data);// this checks the order of alphabet and in this case since o in "helo" comes after a in "helagiuh" then  y is greater than m and the output will be a boolean which is true

// we can now compare numbers and string.

let num1 = "35";
let num2 = 32;
let comparison = num1 > num2; // while comparing the values it converts the string value to a number
console.log(comparison);
// lets try with words
num1 = "wozza";
comparison = num1 < num2;
console.log(comparison);// output is false

if (islogg) {
    
} else {
    
}