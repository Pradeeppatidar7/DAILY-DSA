
  function findHCF(number1, number2) {
    while (number1 != number2) {
      if (number1 > number2) {
        number1 -= number2;
      } else {
        number2 -= number1;
      }
    }
  }
  // display the hcf
  console.log(`HCF is ${number1}`);