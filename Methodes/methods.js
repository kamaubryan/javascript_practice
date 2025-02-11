/*
 * this are inbuilt functions that  perform specific tasks

 * 
 */

let laptop = {// lets create an object that has a function inside it
  cpu: "i9",
  ram: 16,
  brand: "lenovo",
  greet: function(){// this is a function inside the object
    console.log("hello user");
    
  }
};
 // this how we call the function inside the object
laptop.greet();
laptop.brand// while calling the other properties you have to call  them inside the console log
console.log(laptop.brand);
