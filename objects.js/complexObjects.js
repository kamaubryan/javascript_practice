/*
*objects inside objects 
 * functions inside objects
 * deleting objects
 * using the question mark
 * 
 */
let car={// normal object
    engine:"v8",
    model:"2024 model",
    color:"alpine grey"
}
console.log(car);
// complex object

car = {
  engine: "v8",
  model: "2024 model",
  color: "alpine grey",
  interior:{// this is an object inside an object
    color1 : "maroon",
    color2:"white",
    color3:"black"
  }
};
console.log(car);
// when you want to access a single property inside a nested object you can use the same method below

console.log(car.interior.color1, car.interior.color2,car.interior.color3); // this accesses the particular property in the object
// you can also check the length of the property
console.log(car.interior.color3.length);// this brings you the length of the property
// incase you want to delete a acertain property you can use the delete keyword.
delete car.interior
console.log(car);// this outputs without the interior property

// using the question mark 

// lets say you want to print the length of a property but it doesnt exist you can use the question mark 

console.log(car.model1?.length);// this checks if theres a property called model1 and if the property is not available its outputs undefined

