/*
- this is about logical operators where it involve : 
And =&&
OR = //
NOT = !
*/

let x = 4,
  y = 6,
  z = 12;

// and operator

let result = x < 6 && z > y; // for this to be true the two have to be correct to
console.log(result);
result = x < 6 && x > y; // when one is not true an the other is false then the output will also be false
console.log(result); // the output is false

// OR operator .. this works even when on condition is true.

result = x < 6 || x > z;
console.log(result); // the output is true since one condition is true
// lets try when all conditions are wrong

result = x > y || x > z;
console.log(result); //  the output is false since there is no true condition

// not operator
x = !4;
console.log(x);  // this checks if the condition is true ,, at this case the output is false since we  had earlier declared the value of x as 4
