window.onload = function () {
  document.querySelector("h1").style.color = "Blue";
};
document.querySelector("h1").style.color = "Blue";
document.querySelector("h1").style.fontSize = "50px";
document.querySelector("h1").style.backgroundColor = "pink";

// Single Line Comments
// Single Line Commnets
// Single Line Commnets
/* Single Line Comments */

/*
	Multiple Line Comments
	2
	3
	4
	5
*/

/* 
	Output To Screen
	- window.alert()
	- documnet.write()
	- console.log()

	Syntax
*/

// window.close();
// window.alert("Hello From JS File");
document.write("<h1>Hello <span>Page</span></h1>");
console.log("Hello From JS File");

document.write("<p>Yaser Alhamad</p>");
document.querySelector("p").style.backgroundColor = "#303030";
document.querySelector("p").style.color = "white";
document.querySelector("p").style.padding = "20px";
document.querySelector("p").style.fontFamily = "Arial";
document.querySelector("p").style.fontSize = "24px";
document.querySelector("p").style.width = "fit-content";
document.querySelector("p").style.margin = "20px auto";
document.querySelector("p").style.borderRadius = "10px";
document.querySelector("p").style.cursor = "pointer";
document.querySelector("p").style.transform = "rotate(-20deg)";

/* 
	Console Methods
	- log
	- error
	- table

	Web API [Application Programming Interface]

	Styling Console
	- Directive %c
*/

console.log("Log");
console.error("Error");
console.table(["Yaser", "Ali", "Ahmad"]);

console.log(
  "Hello From %cJS %cFile",
  "color: red; font-size: 40px",
  "color: blue; font-size: 40px"
);

/* 
	ES6 [Ecma Script Six]
	Important Website [ES6-features.org]/ [BabelJs]
*/
