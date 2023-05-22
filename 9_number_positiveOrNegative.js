let a = 10;
let b = -10;
let c = 0;

const positiveOrNegative = (n) => {
  if (n > 0) {
    console.log(`${n} is a positive number .`);   // 10 will return positive number
  } else if (n == 0) {
    console.log(`${n} is neither positive number nor negative number .`);    // 0 will return neither negative nor positive number
  } else {
    console.log(`${n} is a negative number .`);  // -10 will return negative number
  }
};

// now logging in console to check if our function works
positiveOrNegative(a);
positiveOrNegative(b);
positiveOrNegative(c);
positiveOrNegative(-124234324);
positiveOrNegative(000000);
positiveOrNegative(745746854);
