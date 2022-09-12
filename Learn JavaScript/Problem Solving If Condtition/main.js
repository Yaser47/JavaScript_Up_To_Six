// Check if a number is odd or even in JavaScript

function isEvenOrOdd(num) {
  if (num % 2 === 0) {
    console.log(`${num} is a Even Number`);
  } else {
    console.log(`${num} is a Odd Number`);
  }
}

isEvenOrOdd(4);
isEvenOrOdd(9);

// Check if input variable is a number or not

function isNumber(input) {
  if (typeof input === "number") {
    console.log(`${input} Is A Number`);
  } else {
    console.log(`${input} Is Not A Number`);
  }
}

isNumber(25);
isNumber(25.25);
isNumber("30");
isNumber("Yaser");
isNumber(true);
isNumber(null);
isNumber(undefined);

// // Check if input variable is a valid number or not

function isValidNumber(inputNum) {
  if (isNaN(inputNum) === true) {
    console.log(`${inputNum} Is Not A Number`);
  } else {
    console.log(`${inputNum} Is A Valid Number`);
  }
}

isValidNumber(25);
isValidNumber(25.25);
isValidNumber("25");
isValidNumber("xyz");
isValidNumber(true);
isValidNumber(false);
isValidNumber(null);

// Check if input variable is a string or not

function isString(value) {
  if (typeof value === "string") {
    console.log(`${value} Is A String`);
  } else {
    console.log(`${value} Is Not A String`);
  }
}

isString("Yaser");
isString("50");
isString(25);
isString(true);
isString(null);
isString(undefined);

// Find the largest of two number

function whoMax(firstValue, secondValue) {
  if (firstValue > secondValue) {
    console.log(`${firstValue} is the largest number`);
  } else if (secondValue > firstValue) {
    console.log(`${secondValue} is the largest number`);
  } else {
    console.log(`${firstValue} is equal to ${secondValue}`);
  }
}

whoMax(12, 15);
whoMax(20, 15);
whoMax(15, 15);

// Find the largest of three number

function whoMaxOfThree(firstNum, secondNum, thirdNum) {
  if (firstNum > secondNum && firstNum > thirdNum) {
    console.log(`${firstNum} is the largest number.`);
  } else if (secondNum > thirdNum) {
    console.log(`${secondNum} is the largest number.`);
  } else {
    console.log(`${thirdNum} is the largest number.`);
  }
}

whoMaxOfThree(12, 10, 14);
whoMaxOfThree(25, 22, 20);
whoMaxOfThree(30, 50, 40);

// Check if a triangle is equilateral, scalene, or isosceles
function theTypeOfTriangle(firstEdge, secondEdge, thirdEdge) {
  if (firstEdge == secondEdge && firstEdge == thirdEdge) {
    console.log(`The triangle is Equilateral`);
  } else if (firstEdge == secondEdge || secondEdge == thirdEdge) {
    console.log(`The triangle is Isosceles`);
  } else {
    console.log(`The traingle is Scalene`);
  }
}

theTypeOfTriangle(12, 12, 12);
theTypeOfTriangle(12, 12, 13);
theTypeOfTriangle(6, 8, 10);

// Find the a number is present in given range
function checkInRange(inputCheck, start, end) {
  if (inputCheck >= start && inputCheck <= end) {
    console.log(`${inputCheck} is between range ${start} and ${end}`);
  } else {
    console.log(`${inputCheck} is outside the range ${start} and ${end}`);
  }
}

checkInRange(5, 0, 15);
checkInRange(5, 15, 30);

// Perform arithmetic operation on two numbers

function math(op, mathNum1, mathNum2) {
  if (op === "Add") {
    console.log(
      `Addition of ${mathNum1} and ${mathNum2} is ${mathNum1 + mathNum2}`
    );
  } else if (op === "Subtract") {
    console.log(
      `Subtraction of ${mathNum1} and ${mathNum2} is ${mathNum1 - mathNum2}`
    );
  } else if (op === "Multiply") {
    console.log(
      `Multiplication of ${mathNum1} and ${mathNum2} is ${mathNum1 * mathNum2}`
    );
  } else if (op === "Divide") {
    console.log(
      `Division of ${mathNum1} and ${mathNum2} is ${mathNum1 / mathNum2}`
    );
  } else if (op === "Modulus") {
    console.log(
      `Modulus of ${mathNum1} and ${mathNum2} is ${mathNum1 % mathNum2}`
    );
  } else {
    console.log(`${op} is not a valid operator`);
  }
}

math("Add", 14, 5);
math("Multiply", 2, 8);

// Find check if a year is leap year or not

function isLeapYear(year) {
  if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
    console.log(`Year ${year} is a Leap Year`);
  } else {
    console.log(`Year ${year} is not a Leap Year`);
  }
}

isLeapYear(2012);
isLeapYear(1900);
isLeapYear(2000);

// Find the grade for input marks

function grade(name, mark) {
  if (mark <= 100 && mark >= 90) {
    console.log(`${name} you have received A grade`);
  } else if (mark < 90 && mark >= 80) {
    console.log(`${name} you have received B grade`);
  } else if (mark < 80 && mark >= 70) {
    console.log(`${name} you have received C grade`);
  } else if (mark < 70 && mark >= 60) {
    console.log(`${name} you have received D grade`);
  } else if (mark < 60 && mark >= 50) {
    console.log(`${name} you have received E grade`);
  } else if (mark < 50 && mark >= 0) {
    console.log(`${name} you have Failed`);
  } else {
    console.log(`Invalid mark of ${mark}`);
  }
}

grade("Yaser", 92);
grade("Omar", 72);
grade("Karam", 86);
grade("Osama", 28);
grade("Ahmad", 129);

console.clear();

// Find number of days in a given month

function findDaysInMonth(month, year) {
  if (
    month === "January" ||
    month === "March" ||
    month === "May" ||
    month === "July" ||
    month === "August" ||
    month === "October" ||
    month === "December"
  ) {
    console.log(`${month} has 31 days`);
  } else if (
    month === "April" ||
    month === "June" ||
    month === "September" ||
    month === "November"
  ) {
    console.log(`${month} has 30 days`);
  } else if (month === "February") {
    if ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) {
      console.log(`${month} has 29 days`);
    } else {
      console.log(`${month} has 28 days`);
    }
  } else {
    console.log(`Invalid month`);
  }
}

findDaysInMonth("February", 2012);
findDaysInMonth("February", 2013);
findDaysInMonth("October", 2022);
findDaysInMonth("April", 2012);
findDaysInMonth("January", 2022);
