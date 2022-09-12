// Question 2

document.write("<h1>Elzero</h1>");
document.querySelector("h1").style.color = "blue";
document.querySelector("h1").style.fontSize = "80px";
document.querySelector("h1").style.fontWeight = "bold";
document.querySelector("h1").style.textAlign = "center";
document.querySelector("h1").style.fontFamily = "Arial";

// Question 3

console.log(
  "%cElzero %cWeb %cSchool",
  "color: Red; font-size: 40px",
  "color: Green; font-size: 40px; font-weight: bold",
  "color: white; background-color: blue; font-size: 40px"
);

// Question 4

console.group("Group 1");
console.log("Message One");
console.log("Message Two");
console.groupCollapsed("Child Group");
console.log("Message One");
console.log("Message Two");
console.groupCollapsed("Grand Child Group");
console.log("Message One");
console.log("Message Two");
console.groupEnd("Group 1");
console.groupEnd("Child Group");
console.groupEnd("Grand Child Group");
console.group("Group 2");
console.log("Message One");
console.log("Message Two");
console.groupEnd("Group 2");

// Question 5

console.table(["Elzero", "Ahmed", "Sameh", "Gamal", "Aya"]);

// Question 6

// First Method
// console.log("I'm In Console");
// document.write("I'm In Page");

// Second Method
/* 
console.log("I'm In Console");
document.write("I'm In Page");
*/
