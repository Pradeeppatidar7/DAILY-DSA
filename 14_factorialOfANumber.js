// factorial of a number 

const factorial = (n) => {
    if(n<0){
        console.log(`negative numbers can't be factorials `)
    }else if(n==0){
        console.log(`0 will return zero as zero multiplied by anything becomes zero`)      
    }
    else{
    let val = 1;
    for (i = 1; i <= n; i++) {
        val *= i;
    }
    console.log(`The factorial of ${n} is ${val}.`);}
}

factorial(5);
factorial(-6);
factorial(0);