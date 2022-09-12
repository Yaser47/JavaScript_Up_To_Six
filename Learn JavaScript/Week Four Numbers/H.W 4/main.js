// Question 1
// Output [100,000]

// Solution 1
console.log(100000);

// Solution 2
console.log(100_000);

// Solution 3
console.log(1e5);

// Solution 4
console.log(100_000.0);

// Solution 5
console.log(5e4 + 5e4);

// Solution 6
console.log(1.5e5 - 5e4);

// Solution 7
console.log(5e4 * 2);

// Solution 8
console.log(Math.pow(10, 5));

// Solution 9
console.log(Math.sqrt(1e10));

// Solution 10
console.log(10 ** 5);

// Solution 11
console.log(2e5 / 2);

// Solution 12
console.log(Number.parseInt(1e5 + 0.25));

// Solution 13
console.log(Math.trunc(1e5 + 0.25));

// Solution 14
console.log(Math.round(1e5 + 0.25));

// Solution 15
console.log(Math.floor(1e5 + 0.25));

// Solution 16
console.log(Math.ceil(1e5 - 0.25));

// Solution 17
console.log(Number("1e5"));

// Solution 18
console.log(+"1e5");

// Question 2

console.log(Math.abs(Number.MIN_SAFE_INTEGER));

console.log(-Number.MIN_SAFE_INTEGER);

console.log(Number.MIN_SAFE_INTEGER / -1);

// Question 3

console.log(Math.trunc(Math.pow(Number.MAX_SAFE_INTEGER, 1 / 13)));

console.log(Math.round(Math.log10(Number.MAX_SAFE_INTEGER))); // CodePen

// Question 4

let myVar = "100.56789 Views";

// Output [100] => Number

console.log(Number.parseInt(myVar));
console.log(typeof Number.parseInt(myVar));

// Output [100.57] => Number

console.log(Number.parseFloat(Number.parseFloat(myVar).toFixed(2)));
console.log(typeof Number.parseFloat(Number.parseFloat(myVar).toFixed(2)));

console.log(+Number.parseFloat(myVar).toFixed(2));
console.log(typeof +Number.parseFloat(myVar).toFixed(2));

console.log(Number(Number.parseFloat(myVar).toFixed(2)));
console.log(typeof Number(Number.parseFloat(myVar).toFixed(2)));

// Question 5
// Output [2]

let num = 10;

console.log(+Number.isInteger(num) + +Number.isInteger(num));
console.log(Number.isInteger(num) + Number.isInteger(num));

// Question 6
// Output [10]

let flt = 10.4;

// Solution 1
console.log(Number.parseInt(flt));

// Solution 2
console.log(Math.round(flt));

// Solution 3
console.log(Math.floor(flt));

// Solution 4
console.log(Math.trunc(flt));

// Solution 5
console.log(+flt.toFixed());
console.log(typeof +flt.toFixed());

console.clear();

// Question 6

console.log(Number.parseInt(Math.random() * 5 + 0)); // Integer 0/ 1/ 2/ 3/ 4
console.log(Math.floor(Math.random() * 5 + 0));
// console.log(Math.floor(Math.random() * (max - min + 1) + min))

console.log(Math.random() * 4 + 0); // Any number between 0 and 4
// console.log(Math.random() * (max - min) + min)

console.log(Math.floor(Math.random() * 4 + 1)); // Integer 1/ 2/ 3/ 4
