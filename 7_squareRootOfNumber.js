// method 1

let a = 4;
console.log(Math.sqrt(a));

// Method 2 
const squareRoot = (n) => {
  if (n == 0 || n == 1) {
    return n;
  }
  let i = 1;
  let result = 1;
  while (result <= n) {
    i++;
    result = i * i;
  }
  return i - 1;
};

console.log(squareRoot(16));
console.log(squareRoot(25));