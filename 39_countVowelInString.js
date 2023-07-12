 function countVowel(str) { 

    // find the count of vowels
    const count = str.match(/[aeiou]/gi).length;

    // return number of vowels
    return count;
}
console.log(countVowel("patidar"));
console.log(countVowel("Pradeep Patidar"));