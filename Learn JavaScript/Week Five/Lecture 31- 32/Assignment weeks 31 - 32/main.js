// Question 1
// Output => true

console.log(100 == "100");
console.log(100 !== "100");

console.log(100 < 1000);
console.log(100 != 1000);
console.log(100 !== 1000);

console.log(110 > 100 && 10 < 20);
console.log(110 > 100 || 10 < 20);
console.log(110 > 100 || 10 > 20);
console.log(110 < 100 || 10 < 20);

console.log(-10 == "-10");
console.log(-10 !== "-10");

console.log(!(-50 >= +"-40"));
console.log(typeof -50 === typeof +"-40");
console.log(typeof -50 == typeof +"-40");

console.log(!(10 >= -"-40"));
console.log(typeof 10 === typeof -"-40");
console.log(typeof 10 == typeof -"-40");

console.log(!("10" === 10));
console.log(+"10" === 10);
console.log(typeof "10" != typeof 10);
console.log(typeof "10" !== typeof 10);

console.log(!(20 < false));
console.log(!(20 == false));
console.log(!(20 === false));

// Question 2
// Output => true

let num1 = 10;
let num2 = 20;

// Solution 1
console.log(num1 < num2);

// Solution 2
console.log(num2 > num1);

// Solution 3
console.log(!(num1 == num2));

// Solution 4
console.log(!(num1 === num2));

// Solution 5
console.log(!(num1 > num2));

// Solution 6
console.log(num1 <= num2);

// Solution 7
console.log(num2 >= num1);

// Solution 8
console.log(typeof num1 === typeof num2);

// Question 3
// Output => true

let a = 20;
let b = 30;
let c = 10;

// console.log(a ? b && a ? c || a ? b);
console.log((a < b && a > c) || a < b);
console.log((a < b && a > c) || a > b);
console.log(
  (typeof a === typeof b && typeof a === typeof c) || typeof a == typeof b
);

console.clear();
// console.log(a ? b ? a ? c);
console.log(a < b == a > c);
console.log(a < b && a > c);
console.log(a < b || a > c);

// console.log(?(a ? b) && !(a ? b) && ?(a ? c) && ?(a ? c));
console.log(!(a > b) && !(a == b) && !(a < c) && !(a == c));
