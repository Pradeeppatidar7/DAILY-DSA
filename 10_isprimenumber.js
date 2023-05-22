let number = 37;
let number1 = 38;
let number2 = 179;
let number3 = 87;

const isPrimeNumber = (n) => {
  for (let i = 2; i < n; i++) {      // loop will run till i becomes equal to n and will check if condition on every iterstion 
    if (n % i === 0) {
      return false;
    }
  }
  return true;
};
console.log(isPrimeNumber(number)); // returns true
console.log(isPrimeNumber(number1)); // returns false
console.log(isPrimeNumber(number2)); // returns true
console.log(isPrimeNumber(number3)); // returns false