/* Challenge One */

let a = 10;
let b = "20";
let c = 80;

// console.log(++a + +b++ + +c++ - +a++);

/*
	[++a] [+]
	[++a]
		- Value: 11 
		- Explain: Pre Increment [Increase 1]
		[+]
		- Explain: Add Operator
	[+b++] [+]
		[+b++]
		- Value: 20  
		- Explain: Unary Operator (20 Number), Post Increment Print (20) Only 
		[+]
		- Explain: Add Operator
	[+c++] [-]
		[+c++]
		- Value: 80
		- Explain: Unary Operator Don't Change Any Thing, Post Increment Print (80) Only
		[-]
		- Explain: Subtract Operator
	[+a++]
		[+a++]
		- Value: 11 [Update Based On Recent Value Of Variable a]
		- Explain: Unary Operator Don't Change Any Thing, Post Increment Print (11) Only
*/

// console.log(++a + -b + +c++ - -a++ + +a);

/*
	[++a] [+]
	[++a]
		- Value: 11 
		- Explain: Pre Increment [Increase 1]
	[-b] [+]
		[-b] 
		- Value: -20
		- Explain: Unary Negation
		[+]
		- Explain: Add Operator
	[+c++] [-]
		[+c++] 
		- Value: 80
		- Explain: Unary Plus, Post Increment
	[-a++] [+]
		[-a++]
		- Value: -11 [Update Based On Recent Value Of Variable a]
		- Explain: Unary Negation, Post Increment
	[+a]
		[+a]
		- Value: 12 [Take A Postive Value Of Variable a [11] Then Add A 1]
*/

// console.log(--c + +b + --a * +b++ - +b * a + --a - +true);

/*
	[--c] [+]
		[--c] 
		- Value: 79
		- Explain: Pre Decrement
		[+]
		- Explain: Add Operator
	[+b] [+]
		[+b] 
		- Value: 20
		[+]
		- Explain: Add Operator
	[--a] [*] [+b++] [-]
		[--a]
		- value: 9
		- Explain: Pre Decrement
		[*]
		- Explain: Multiple Operator
		[+b++]
		- Value: 20
		- Post Increment
		[-]
		- Explain: Subtract Operator
	[+b] [*] [a] [+]
		[+b] 
		- Value: 21
		- Explain: The Result Of Post Increment
		[*]
		- Explain: Multiple Operator
		[a]
		- Value: 9
		[+]
		- Explain: Add Operator
	[--a]
	- Value: 8
	- Explain: Pre Decrement
	[+true]
	- Value: 1
	- Explain: Unary Plus Take A Number
*/

/*
	Challenge Two
*/

let d = "-100";
let e = "20";
let f = 30;
let g = true;

// Only Use Variables Value
// Don't Use Variable Twice

// Output 2000
console.log(-d * +e);

// 173
console.log(++g * ++e + -d + ++f);
