function checkStringPalindrome(string) {
    const stringLength = string.length;
    for(let i = 0; i < stringLength / 2; i++) {
        if(string[i] !== string[stringLength - 1 - i]) {
            return 'It is not a palindrome';
        }
    }
    return 'It is a palindrome';
}
let result1 = checkStringPalindrome("hello");
let result2 = checkStringPalindrome("radar");

console.log(result1);
console.log(result2);