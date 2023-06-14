// Program to Sort Words in Alphabetical Order

function sortWord(string) {
    const result = string.split(" ").sort().join(" ");
    return console.log(result);
}

sortWord("patidar Pradeep  ");  // here I and J are uppercase so uppercase letters are placed before lowercase.
sortWord("i am learning Javascript");