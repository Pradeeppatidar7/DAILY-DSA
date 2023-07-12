// const prompt=require('prompt-sync')()
// num = parseInt(prompt("Enter a number: "))
// if(num % 2 == 0) {
//     console.log("The number is even.");
// }

// if the number is odd
// else {
//     console.log("The number is odd.");
// }


function oddOrEven(num) {
    if (num % 2 == 0) {    // check the conditon num is even
      return `${num} is Even number`;
    } else {
      return `${num} is Odd number`;
    }
  }
  
  console.log(oddOrEven(3));