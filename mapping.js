/**
 * how to create a map
 *
 */
// creating a new map
let map = new Map();
map.set("mercedes", "Brian"); // adding values and keys to the map element
map.set("Range", "Pops");
map.set("c200", "mom");
// in order to access the keys you can use the .keys
console.log(map.keys());
// you can also check if the certain keys are available
console.log(map.has("mercedes")); // this only works for the values not the keys
// for getting the value you use .get
console.log(map.get("c200")); // here we input the value of the key and it will return the value

// we can output all the values using the for of loop
for (let [z, x] of map) {
  // you can put any value
  console.log(z, ":", x);
}
//when you add a value but with the same key it will overwrite the first one 
map.set("mercedes", "kiriro")// here we have overwritten the first value
for (let [z, x] of map) {
  // you can put any value
  console.log(z, ":", x);
}
// we can use for each method to display all the contents
map.forEach((v,k)=>{// here we start with the value first then we got to the key ,, the key can be an index or anything you have given it
    console.log(v,":",k);
    
})