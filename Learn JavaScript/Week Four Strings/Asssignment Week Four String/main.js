// Question 1
// Output => e
// Output => eee

let userName = "Elzero";

// Solution 1
console.log(userName[0].toLowerCase());

// Solution 2
console.log(userName.charAt(0).toLowerCase());

// Solution 3
console.log(userName.slice(0, 1).toLowerCase());

// Solution 4
console.log(userName.substring(0, 1).toLowerCase());

// Solution 5
console.log(userName.substr(0, 1).toLowerCase());

// Solution 6
console.log(userName.split("")[0].toLowerCase().repeat(3));

// Question 2

let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // true

console.log(word.startsWith(letterE.toUpperCase())); // true

console.log(word.endsWith(letterO.toLowerCase())); // true
