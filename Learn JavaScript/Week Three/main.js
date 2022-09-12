/* 
	Arithmetic Operators
	+ Addition
	- Subtraction
	* Multiplication
	/ Division
	** Exponentiation (ES7)
	% Modulus (Division Remainder)
	++ Increment [ Post / Pre ]
	-- Decrement [ Post / Pre ]
*/

// Addition
console.log(10 + 20);
console.log(typeof (10 + 20));
console.log(10 + "Yaser"); // Output String/ Plus Operator [+] Is The Concatenate Opertor Not The Plus [Arithmetic Addition]/ It Is Not An Arithmetic Operation
console.log("10" + "Yaser");
console.log(typeof (10 + "Yaser"));
console.log(typeof ("10" + "Yaser"));

// Subtraction
console.log(10 - 20);
console.log(10 - "Yaser"); // NaN [Not-a-Number]/ Don't Find A Plus Operator To Treat It As A Plus Concatenate/ It Is An Arithmetic Operation
console.log(typeof NaN);
console.log(typeof (10 - "Yaser"));

// Multiplication
console.log(10 * 20);
console.log(10 * -20);
console.log(10 * "Yaser");

// Division
console.log(20 / 5);
console.log(20 / 3);

// Exponentiation
console.log(2 ** 4);
console.log(2 * 2 * 2 * 2);

// Modulus
console.log(10 % 2); // [10 / 2 =  5] Output Integer [Whole Number Without Fractions Or Commas]/ Devision Remainder = 0
console.log(11 % 2); // [11 / 2 = 5.5] / Remove 1 To Accept The Division
console.log(32 % 5); // Remove 2 To Accept The Division
console.log(39 % 6);

// ++ Increment [One Of A Series Of Increses]
let num = 1;
console.log(num++); // Post Increment Print The Original Value Of num Then Add A Value To Original Value Of num [Print And Increase]
console.log(num);

let secondNum = 1;
console.log(++secondNum); // Pre Increment Add A Value To Orginal Value Of secondNum Then Print A Total Value [Increase And Print]

// -- Decrement [Reduction]
let thirdNum = 5;
console.log(thirdNum--); // Post Decrement
console.log(thirdNum);

let fourthNum = 5;
console.log(--fourthNum); // Pre Decrement

console.clear();

/* 
	Unary Operators [Convert A Value Into A Number/ If It Is A Number, It Remains A Number]
	=> + Unary Plus  [Convert A Value Into A Number/ Return The Number As Is]
	=> - Unary Negation  [Convert A Value Into A Number And Negate It]
	Test 
	- Normal Number
	- String Number
	- String Negative Number
	- String Text
	- Float 
	- Hexadecimal Numeral Systme => 0xFF
	- null
	- true
	- false
*/
// String Color Is Black/ Number Color Is Blue

// Normal Number
console.log(100);
console.log(+100);
console.log(-100);

// String Number
console.log("110");
console.log(typeof "110");

console.log(+"110");
console.log(typeof +"110");

console.log(-"110");
console.log(typeof -"110");

// String Negative Number
console.log("-100");
console.log(+"-100");
console.log(-"-100");

// String Text
console.log("Yaser");
console.log(+"Yaser");
console.log(-"Yaser");
console.log(typeof +"Yaser"); // Number

// Float
console.log(15.5);
console.log(+"15.5");
console.log(-"15.5");

// Hexadecimal
console.log(+"0xff");
console.log(typeof +"0xff");
console.log(-"0xff");
console.log(typeof -"0xff");

console.log("0xff");
console.log(typeof "0xff");

console.log(0xff);
console.log(typeof 0xff);

console.log(+0xff);
console.log(typeof +0xff);

// // null
console.log(null);
console.log(typeof null);

console.log(+null); // Empty Value
console.log(typeof +null);

console.log(-null);
console.log(typeof -null);

// false
console.log(false);
console.log(typeof false);

console.log(+false);
console.log(typeof +false);

console.log(-false);
console.log(typeof -false);

// true
console.log(true);
console.log(typeof true);

console.log(+true);
console.log(typeof +true);

console.log(-true);
console.log(typeof -true);

// Another Way To Convert A Value Into A Number
console.log(Number("140"));
console.log(typeof Number("140"));

console.clear();

/* 
	Type Coercion (Type Casting)
	Is The Automatic Or Implicit Conversion Of Values From One Data Type To Another [Such As Strings To Numbers]
	The Process Of Converting A Data Type From One Type To Another While Running The Code [Automatic] According To The Logic And Datum In The Code 
	=> +
	=> -
	=> "" - 2
	=> false - true
*/

let a = "10"; // String
let b = 20; // Number
let c = true; // Boolean

// Case One
console.log(a + b); // Output String/ [+] Concatenate Operator
console.log(typeof (a + b));

// I Really Want To Add Them Together As Numbers
console.log(+a + b); // [+] Plus Operator
console.log(Number(a) + b);
console.log(typeof (+a + b));

// Case Two
console.log(a - b); // The Arithmetic Process/ The Language Deals With The Variable (a) As A Number, Based On Logic And Datum [Type Coercion]
console.log(b - a);

console.log("Yaser" - b); // I Can't Add A String To A Number, Not An Arithmetic Process [The Language Can't Deal With The First Value As A Number]

// Case Three
console.log("" + 2); // [+] Concatenate Operator Output String Not A Arithmetic Process
console.log(typeof ("" + 2));

console.log("" - 2); // The Arithmetic Process
console.log(typeof ("" - 2));

console.log(""); // Empty Value
console.log(+"");
console.log(0 - 2);

// Case Four
console.log(false - true); // The Arithmetic Process/ Both Returns A Number
console.log(+false - +true); // The Same Idea
console.log(typeof (false - true));

console.log(false + true);
console.log(+false + +true);
console.log(typeof (false + true));

console.log(b + c);
console.log(typeof (b + c));
console.log(c - b);
console.log(typeof (c - b));

console.log(a + b + c);
console.log(typeof (a + b + c));
/* Based On Type For The First Two Values/ a [String], b [Number] The Output 1020 String, [true] Boolean Value [Return A Number 1] Convert It To String [true], 
Not A Boolean Or Number Value */
// It Is All Based On Type Coercion, Which Language Does With Compulsion
console.log(+a + b + c);
console.log(typeof (+a + b + c));

console.log(c + a + b); // [+] Concatenate Operator
console.log(typeof (c + a + b));

console.log(c + b + a); // Based On Type [Number] For The First Two Values [c => 1]/ [b = 20] The Arithmetic Process Then 21 [Number]/ 10 [String]
console.log(typeof (c + b + a));

console.log(a - b - c); // The Arithmetic Process
console.log(typeof (a - b - c));

console.log(c - a - b); // The Arithmetic Process
console.log(typeof (c - a - b));

console.log(c - b - a); // The Arithmetic Process
console.log(typeof (c - b - a));

console.clear();

/* 
	Assignment Operators [=], [+=], [-=], [*=], [/=], [%=], [**=]
*/

let x = 10;

// x = 20;

x = x + 20;

x = x + 70;

x += 100; // x = x + 100

x -= 50; // x = x - 50

x /= 50; // x = x / 50

x **= 2; // x = x**3

x *= 5; // x = x * 5

x %= 6; // x = x % 6
console.log(`${x}`);

console.clear();
