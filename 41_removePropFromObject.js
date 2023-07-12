const person = {
    name: "pradeep",
    age: 21,
    hobbies: ["gaming", "farming", "coding"],
    greet: function () {
      console.log("Hello pradeep.");
    },
    score: {
      maths: 50,
      science: 70,
    },
  };
  // deleting a property from an object
delete person.greet;
delete person['score'];
delete person['age'];

console.log(person);