function SumOfNaturalNumber(num) {
    if(num > 0) {
        return num + SumOfNaturalNumber(num - 1);
    } else {
        return num;
    }
}

console.log(SumOfNaturalNumber(18));