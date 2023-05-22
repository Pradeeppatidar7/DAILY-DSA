// to see if two numbers have same last number

const sameLastNumber = (n1, n2) => {
    if (n1 % 10 === n2 % 10) {   // condition to test
      console.log(`${n1} & ${n2} have same last number`);
    } else {
      console.log(`${n1} & ${n2} do not have same last digit`);
    }
  };
  
  let num1 = 34;
  let num2 = 41;
  let num3 = 16;
  let num4 = 56;
  
  sameLastNumber(num1, num2);
  sameLastNumber(num3, num4);
  