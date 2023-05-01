const prompt=require('prompt-sync')()
num = parseInt(prompt("Enter a number: "))
if(num % 2 == 0) {
    console.log("The number is even.");
}

// if the number is odd
else {
    console.log("The number is odd.");
}
