// Question 1
console.log(10 * 20 - (15 % 3) + 190 + 10 - 400);
// Question 2

let num = 3;
let a = true;

// Solution One
// num = num + num;
// console.log(num);

// Solution Two
// num += num;
// console.log(num);

// Solution Three
// num = num * ++a;
// console.log(num);

// Solution Four
// num = ++num + ++a;
// console.log(num);

// Solution Five
// num += --num + --num;
// console.log(num);

// Solution Six
// num *= --num;
// console.log(num);

// Solution Seven
// num = num++ + --num;
// console.log(num);

// Solution Eight
// num = num * (num-- - --num);
// console.log(num);

// Solution Nine
num = num + (num % ++num);
console.log(num);

// Question 3

let numTwo = "10";

// Solution One
// numTwo = +numTwo + +numTwo;
// console.log(numTwo);
// console.log(typeof numTwo);

// Solution Two
// numTwo = numTwo++ + --numTwo;
// console.log(numTwo);
// console.log(typeof numTwo);

// Solution Three
// numTwo = +numTwo * (numTwo-- - --numTwo);
// console.log(numTwo);
// console.log(typeof numTwo);

// Solution Four
// numTwo = +numTwo + (numTwo++ % ++numTwo);
// console.log(numTwo);
// console.log(typeof numTwo);

// Solution Five
// numTwo = numTwo * (numTwo-- % --numTwo);
// console.log(numTwo);
// console.log(typeof numTwo);

// Solution Six
numTwo = Number(numTwo) + Number(numTwo);
console.log(numTwo);
console.log(typeof numTwo);

// Question 4

let points = 10;

// Challenge One 13
// points = ++points + points-- - --points;
// console.log(points);

// Challenge Two 8
points = points - (points-- % --points);
console.log(points);
