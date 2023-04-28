//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

// let person3 = {
//     pizza:["Deep Dish","South Side Thin Crust"],
//     tacos:"Anything not from Taco bell",
//     burgers:"Portillos Burgers",
//     ice_cream:["Chocolate","Vanilla","Oreo"],
//     shakes:[{
//         oberwise:"Chocolate",
//         dunkin:"Vanilla",
//         culvers:"All of them",
//         mcDonalds:"Sham-rock-shake",
//         cupids_candies:"Chocolate Malt"
//     }]
// }

let person3 = {
  pizza: ["Deep Dish", "South Side Thin Crust"],
  tacos: "Anything not from Taco bell",
  burgers: "Portillos Burgers",
  ice_cream: ["Chocolate", "Vanilla", "Oreo"],
  shakes: [
    {
      oberwise: "Chocolate",
      dunkin: "Vanilla",
      culvers: "All of them",
      mcDonalds: "Sham-rock-shake",
      cupids_candies: "Chocolate Malt",
    },
  ],
};

for (let key in person3) {
  if (Array.isArray(person3[key])) {
    console.log(key + ": " + person3[key].join(", "));
  } else if (typeof person3[key] === "object") {
    for (let subKey in person3[key][0]) {
      console.log(subKey + ": " + person3[key][0][subKey]);
    }
  } else {
    console.log(key + ": " + person3[key]);
  }
}



//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

// Create our Person Prototype


// Use an arrow to create the printInfo method

// Create another arrow function for the addAge method that takes a single parameter
// Adding to the age 

function Person(name, age) {
    this.name = name;
    this.age = age;
    
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  
    this.addAge = () => {
      this.age += 1;
    };
  }


  const person1 = new Person("John", 30);
  const person2 = new Person("Jane", 25);




// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(str) {
    return new Promise((resolve, reject) => {
      if (str.length > 10) {
        resolve("Big word");
      } else {
        reject("Small number");
      }
    });
  }

  
  checkStringLength("hello world")
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.log(error); 
  });

checkStringLength("hi")
  .then((result) => {
    console.log(result); 
  })
  .catch((error) => {
    console.log(error); 
  });

