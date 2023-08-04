//with regEx
// const string = 'Learning JavaScript Program';

// const result = string.replace(/a/g, "A");

// console.log(result);

const string = 'Learning JavaScript Program';

const splitString = string.split('a');

const result = splitString.join('A');

console.log(result);