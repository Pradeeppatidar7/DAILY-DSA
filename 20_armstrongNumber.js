// ARMSTRONG NUMBER is that number in which sum of the cubes of the digits of the number is equal to number itself

const number = 371;
const numberString = number.toString();
const numberOfDigits = numberString.length;
let sum = 0;

let temp = number;

while (temp > 0) {
  let remainder = temp % 10;

  sum += remainder ** numberOfDigits;
  temp = parseInt(temp / 10);
}

if (sum == number) {
  console.log(`${number} is an Armstrong number`);
} else {
  console.log(`${number} is not an Armstrong number.`);
}