// Arrays methods

let ages = [20, 30, 25, 24, 28, 19];

console.log(ages.length); //returns the array length nb
console.log(ages[4]); // returns the age 28
console.log(ages.slice(1)); //returns the copy of the remainder of the array withou the sliced digit

console.log(ages.splice(1)); // returns the default firtst digit and removes it from the array
console.log(ages);

// console.log(ages);

// array destructuring

let [a, b, c, d, e] = ages; // here we have already destructured the array and reassigned the values to the following values
console.log(a);
// console.log(c);

[a, b, c, , e] = ages; // you can actually skip the value of what yo don't want by using the double comma
console.log(e); // here its undefined since there is no  value in the 5th index

// a trick i have learned you can swap the value of something using array destructuring

let g = 34;
let h = 40;
let i = 45;
[g, h, i] = [h, i, g]; // we have just reassigned the values using the array destructuring

console.log(`g : ${g},  h : ${h},  i : ${i}`);
// we can  turn a string to an array
let names =
  "my first name is Brian and second is kiriro and the third is kamau".split(
    " " // when you put one space it will make each and every letter as an array and when we put two spaces its the whole word
  );
console.log(names);
let [p, q, r, s, t, u, v, w, x, y, , z] = names;
console.log(q, r, s, t, v, z);
let [...woza] = names; // this is another way of destructuring an array
console.log(woza);
