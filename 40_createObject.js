// Program to Create Objects in Different Ways
 //Method-1 using Constructor Function
  function Person() {
    (this.name = "Pradeep"),
      (this.age = 21),
      (this.hobbies = ["gaming", "Farming", "coding"]),
      (this.greet = function () {
        console.log("Hello everyone.");
      }),
      (this.score = {
        maths: 75,
        english: 65,
      });
  }
  
  const person = new Person();
  
  console.log(typeof person); // object
  
  // accessing the object value
  console.log(person.name);
  console.log(person.hobbies[2]);
  person.greet();
  console.log(person.score.english);


// // Method-2 Using object literal
// const person = {
//     name: "pradeep",
//     age: 21,
//     hobbies: ["gaming", "farming", "coding"],
//     greet: function () {
//       console.log("Hello pradeep.");
//     },
//     score: {
//       maths: 50,
//       science: 70,
//     },
//   };
  
//   console.log(typeof person); // object
  
//   // accessing the object value
//   console.log(person.name);
//   console.log(person.hobbies[1]);
//   person.greet();
//   console.log(person.score.science);
  
  