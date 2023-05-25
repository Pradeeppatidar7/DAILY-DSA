const start = 25;
const end = 70;

console.log(`the prime numbers between ${start} and ${end} are as follows : `);

for (i = start; i <= end; i++) {
  let divisiblity = 0;

  for (j = 2; j < i; j++) {
    if (i % j == 0) {
      divisiblity = 1;
    }
  }

  // divisiblity acts as a value condition if it is more than zero number is not prime 

  if (i > 1 && divisiblity == 0) {  // if both true we get the prime number
    console.log(i);
  }
}