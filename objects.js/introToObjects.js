/*
this are entities that have more than one properties
 */

// object literals.
let person1 = {}; // this is already an object
console.log(person1, typeof person1); // the output here will be "{} object"
person1 = {
  name: "Brian",
  favCar: "mercedes",
  status: "single",
  'work experience':2
};
console.log(person1); // here it will print all the properties of the object name person1;
// when you want to print a single product you can use the following methods

console.log(person1.name, person1.favCar, person1.status); // here the status has changed hence it only outputs the properties only "Brian mercedes single"

// you can also use this method
console.log(person1["name"], person1["favCar"], person1["status"]); // this has the same output as the first one

console.log(person1["woza"]);// when you try to output a property that is not indicated it will output undefined

// when theres a property with more than one word then its recommended to use the brackets

console.log(person1['work experience']);// this is so recommended.

// while you want to print all the objects at once you can use the for in loop method
for (let x in person1){
console.log(x, person1[x]);

}
