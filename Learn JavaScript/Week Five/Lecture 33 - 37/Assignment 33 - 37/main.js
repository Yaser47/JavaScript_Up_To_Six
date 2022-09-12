// Question 1

// Output => "009", "020", "110"
// let num = 9;
// let num = 20;
let num = 110;

if (num < 10) {
  console.log(`"00${num}"`);
} else if (num > 10 && num < 100) {
  console.log(`"0${num}"`);
} else {
  console.log(`"${num}"`);
}

// Question 2

let input1 = 9;
let str = "9";
let str2 = "20";

if (input1 == str) {
  console.log(`${input1} Is The Same Value As ${str}`);
}

if (input1 == str && typeof input1 !== str) {
  console.log(`${input1} Is The Same Value As ${str}, But Not The Same Type`);
}

if (input1 !== str2) {
  console.log(`${input1} Is Not The Same Value Or The Same Type As ${str2}`);
}

if (str != str2 && typeof str === typeof str2) {
  console.log(`${str} Is The Same Type As ${str2}, But Not The Same Value`);
}

// Question 3

let value1 = 10;
let value2 = 30;
let value3 = "30";

// 30 > 10 , typeof value2 !== typeof value3
// 30 > 10 , value2 == value3 , typeof value2 !== typeof value3
// value1 !== value3 , typeof value2 !== typeof value3

if (value1 !== value3 && value3 !== value2) {
  console.log(`30 Is Larger Than 10 And Type string Not The Same Type As number
30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number
${value3} Value And Type Is Not The Same As ${value1} And Type Is Not Same As ${value2}
	`);
}

// Question 4
// modi num1 larger
// modi num1 larger
// num3 number | num1 string

// Edit What You Want Here
let num1 = 11;
let num2 = 10;
let num3 = 11;
let num4 = 33;

// Condition 1
if (num1 > num2) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 2
if (num1 > num2 && num1 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 3
if (num1 > num2 && num1 === num3) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 4
if (num1 + num2 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 5
if (num1 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 6
if (num1 + num2 + num3 < num4) {
  console.log("True");
} else {
  console.log("False");
}

// Condition 7
if (num4 - (num1 + num3) + num2 === 21) {
  console.log("True");
} else {
  console.log("False");
}
