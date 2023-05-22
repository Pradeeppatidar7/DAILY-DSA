// factors of a number  ...

function calculate(number) {
    var str = "0";
    for (var i = 1; i <= number; i++) {
        if (number % i == 0) {
            str += ', ' + i;
        }
    }
    console.log(str);
}

calculate(232);