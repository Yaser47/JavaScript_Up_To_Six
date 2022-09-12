/* 
	Data Types Intro [Operator (Typeof)]
	- String 
	- Number
	- Array => Object
	- Object
	- Boolean
	- Undefined
*/

/*
console.log("Yaser Saeed"); // String
console.log(typeof "Yaser Saeed"); // Any thing inside "" Text
console.log(typeof "5000");
console.log(5000); // Number
console.log(typeof 5000);
console.log(typeof 5000.99);

console.log([17, 18, 22]); // Array
console.log(typeof [17, 18, 22]);
console.log(["Ya", "Ah", "Sa"]);
console.log(typeof ["Ya", "Ah", "Sa"]);

console.log({ name: "Yaser", age: 21, country: "Jo" }); // Object
console.log(typeof { name: "Yaser", age: 21, country: "Jo" });

console.log(true); // Boolean [Yes Or No]
console.log(typeof true);
console.log(false);
console.log(typeof false);

console.log(undefined); // Undefined Not Existing
console.log(typeof undefined);

console.log(null);
console.log(typeof null); // Object
*/

/* 
	Variables Intro [Container We Put A Data Inside It/ Value That Repeat When Built A Code/ Easy To Modified The Value]
	- Declare A Variable Then Use [Important Point]
	- Syntax ( Keyword | Variable Name | Assignment Operator | Variable Value )
	- We Can Declare The Variable Without Use The Keyword Var
	- Id [HTML] And Global Variable
	- Loosely Typed [When You Declare A Variable You Don't Need To Determine The Type Of Variable String Or Number... Such As JavaScript] vs Strongly Typed
	*/

// var user = "Yaser";
// var age = 21;

// var user = "Yaser",
//   age = 21;

// console.log(user);
// console.log(user);
// console.log(user);

// console.log(age);
// console.log(age);
// console.log(age);

// console.log(hello);
// hello.innerHTML = "Option";

/* 
	Identifiers [The Name Of The Variable To Be Created]
	- Reserved Words [You Can't Use It (var/ if/ function )]
	- Name Conventions And Rules
	[Valid ==> Put A Number In The Middle Or End Of The Identifiers (us1er/ user1)/ 
		Start By Underscore/ Dollar Sign Or Put It In Anywhere of The Name (_user/ us_er/ user_/ $user/ us$er/ user$)]
	[Not Valid ==> The Space In The Identifiers (us er)/ 
		Start The Identifiers By Number (1user)/
		Any Special Character In Anywhere Of The Name (@/ #)]
	- Identifiers Is Sensitive [user not sams User]
	- Naming Method Is Camel Case [camelCase/ userName/ newEmail]
*/

// var user = "Yaser";
// var User = "Omar";

// console.log(user);
// console.log(User);

/* 
	New Keyword In Es6 Let/ Const
	Var 
	- Redeclare (Yes)
	- Access Before Declare (Undefined)
	- Variable Scope Drama [Added To Window] ()
	- Block Or Function Scope

	Let 
	- Redeclare (No => Error [Notify You Of The Error And Place Of It])
	- Access Before Declare (Error)
	- Variable Scope Drama ()
	- Block Or Function Scope

	Const
	- Redeclare (No => Error [Notify You Of The Error And Place Of It])
	- Access Before Declare (Error)
	- Variable Scope Drama ()
	- Block Or Function Scope
*/

// A Variable That Has More Than One Value
// var a = 1;
// var a = 2;
// let a = 1;
// let a = 2;
// const a = 1;
// const a = 2;
// console.log(a);

// Use The Variable Before Declaring It
// console.log(a);
//var a = 2; // Undefined [Vague] I Don't Have A Error That Show What Happen
//let a = 2; // An Error Appears Stating What Happened/ At The Actual Place
//const a = 2;

// Window Object
//var aabb = 1; // Add In Window Object That Creat A Problem [- Variable Scope Drama]/ You Can Access
//let aabb = 1; // Don't Add To Window Object/ You Can Access
//const aabb = 1;

// var | let => Don't work on function scope
// var => Work on block scope | let => Don't work on function scope

/* 
	String Syntax + Character Escape Sequences
	\ Escape [Ignore The Character Immediately After It] + Line Continue
	\n
*/

//console.log('Elzero'); // Not Problem The Same Output
//console.log("Elzero");

//console.log('Elzer Web "School"'); // Double Quote Inside Single Quote
//console.log("Elzero Web 'School'"); // Single Quote Inside Double Quote

//console.log("Elzero Web \"School\"");
//console.log('Elzero Web \'School\'');
//console.log('Elzero \\Web \'School\'');
/*console.log("Elzero \
Web \
School"); // Escape The New Line [Ignore The Enter Press] */

//console.log("Elzero\nWeb\nSchool"); //  Every Word In A Line

/* 
	Concatenation [A Theory In Computer Science Relating Date To Each Other]
	+ Operator That Help You To Connect Data With Each Ohter 
*/

// let a = "We Love";
// let b = "JavaScript";

// document.write(a + b);
// document.write(a + " " + b);

// console.log(a + " " + b);
// console.log(a, b);

/* 
	Template Literals (Template Strings)
*/

// let a = "We Love";
// let b = "JavaScript";
// let c = "And";
// let d = "Programming";

// console.log(a + " " + b + " \"\" '' \\ " + c + " " + d); // Traditional Concatenate [Legacy Code]
// console.log(a + " " + b +
// "\n" + c + " " + d);

// console.log(`${a} "" '' \\ ${b} ${c} ${d}`); // ES6 New Method // To Add Any Variable Or Any Expression Use ${}
// console.log(`${a} ${b}
// ${c} ${d}`);

// let markUp = `
// 	<div class="card">
// 		<div class="child">
// 			<h2>Title</h2>
// 			<p>Paragraph</p>
// 		</div>
// 	</div>
// `;
// let title = "Elzero";
// let desc = "Elzero Web School";
// let markUp = `
// 	<div class="card">
// 		<div="child">
// 			<h2>${title}</h2>
// 			<p>${desc}</p>
// 		</div>
// 	</div>
// `;

// document.write(markUp);

/* 
	Challenge
*/

let mainTitle = "Elzero",
  shortDescription = "Elzero Web School",
  newDate = "25/10";

let myParent = `
	<div class="parent">
		<h3 class="heading">Hello ${mainTitle}</h3>
		<p class="text">${shortDescription}</p>
		<span class="date">${newDate}</span>
	</div>
`;
document.write(myParent.repeat(4));

// Self Study Consolea
/*
console.error("This is a error");

console.warn("This is a warning");

for (let i = 0; i < 5; i++) {
  console.count(i);
}

console.time("abc");
let fun = function () {
  console.log("Yaser Saeed");
};
let fun2 = function () {
  console.log("Age 21");
};
fun();
fun2();
console.timeEnd("abc");

// console.clear();
*/
