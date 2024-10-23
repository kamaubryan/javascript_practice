/*
this works like if else the only difference is that you dont use "if " and "else"

*/
// this is the long way of writing if else ,, there is a shorter way of writing it

let num = 1,
  result;
if (num % 2 === 0) {
  result = "even";
  console.log(result);
} else {
  result = "odd";
  console.log(result);
}
// using ternary operator
num % 2 === 0 ? (result = "even") : (result = "odd");
console.log(result); // here we have use the ternary operator hence the shortnes of code
// lets try nested if with ternary operator
// we are going to check if the kid has passed and the grade he is in

let results=90;
results > 90
  ? console.log("the grade is a strong A")
  : results >= 75
  ? console.log("the results is also a strong A")
  : results >= 55
  ? console.log("thats a clean B")
  : results >= 50
  ? console.log("that a clean C")
  : 
  console.log("you have failed")
  
