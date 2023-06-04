function sumOfNaturalNumber(number) {
    // looping from i = 1 to number
    let sum = 0;
    let i = 1;
  
    while(i <= number) {
        sum += i;
        i++;
    }
    return sum;
  }
  console.log('The sum of natural numbers:', sumOfNaturalNumber(100));