/*
 * you want to iterate within the object
 */
let car = {
  engine: "v8",
  model: "2024 model",
  color: "alpine grey",
  interior: {
    // this is an object inside an object
    color1: "maroon",
    color2: "white",
    color3: "black",
  },
};

// when we want to output each of the properties we can use the for in loop

for (let x in car) {
  // this has outputed  each and every property of the object
  console.log(x);// this outputs the properties without the values
  console.log(x, car[x]); // this has outputed every single property and the value of the property
}
