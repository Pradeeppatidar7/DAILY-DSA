function fibonacciSequence(num) {
    // n = how many sequence of numbers
    if (num < 2) {
      return num;
    } else {
      return fibonacciSequence(num - 1) + fibonacciSequence(num - 2);
    }
  }
  const n = 8;
  if (n <= 0) {
    console.log("Enter the positive number");
  } else {
    for (let i = 0; i < n; i++) {
      console.log(fibonacciSequence(i));
    }
  }
  
  fibonacciSequence(8);