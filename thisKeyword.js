/**
 *how to use it
 *why it is called a this keyword
 */

let car = {
  model: "gle",
  year: 2024,
  make: "mercedes",
  getConfiguration: function () {
    // we can define a variable inside the function
    let luxury = "leather seats";
    console.log(luxury);
    // when you try to access the above properties its impossible
    // {console.log(model);}// this is not accessible yet its already defined
    // try this instead
    console.log(car.model); // this brings the output
    // instead of using the object name you can use the this keyword
    console.log(this.year);
  },
};
let car2 = {
  model: "m5",
  year: 2025,
  make: "Beamer",
  getConfiguration: function () {
    // caution you should always use this method of naming the functions
    console.log(this.model);
  },
};
car.getConfiguration();
car2.getConfiguration();

// why its called this keyword
// lets compare 2 cars

function getLatestCarModel(car, car2) {
  if (car2.year > car.year) {
    console.log(car2);
  } else {
    console.log(car);
  }
}
getLatestCarModel(car2, car);
 

