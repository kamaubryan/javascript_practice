/*
. for of loop structure
learning how to implement it
*/

    const cars = [
    {
        title: "mercedes",
        engine: "v8",
        models: ["gls", "gle", "cclass", "sclass"],
    },

    {
        title: "BMW",
        engine: "v8 Biturbo",
        models: ["xm", "ms", "suvs"],
    },
    {
        title: "ford",
        engine: "v8 ",
        models: ["ranger", "seddans", "suvs"],
    },
    ];

for (let quality of cars) {
  console.log(quality.title);

  for (let model of quality.models) {
    console.log(model);
  }
} // this is how you get to initialize the contents of the objects
//when to want to initialize the array in the object you can do this instead
 for (let q in cars){
    console.log(q.[2].models);
    
 }

