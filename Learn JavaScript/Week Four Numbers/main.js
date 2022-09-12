/*
	Number
	- Double Precision
	- Syntactic Sugar "_"
	- e
	- **
	- With Decimal
	- Number + BigInt
	- Number Min Value
	- Number Max Value
*/

// Syntactic Sugar
// How To Change The Syntax To Make It Easier To Read
console.log(1000000);
console.log(1_000_000); // Ignores The Sign Underscore Between Numbers

// e Another to write the number
// Do You Want To Count How Many Zeros After One?
console.log(1e6);

console.log(2.5e6);
console.log(2_500_000);

console.log(3.25e6);
console.log(3_250_000);

// ** Exponentiation
console.log(10 ** 6);
console.log(10 * 10 * 10 * 10 * 10 * 10); // The Same Result

console.log(2 ** 3);
console.log(5 ** 2);

// With Decimal [Floating Point Number]
console.log(1000000.0); // => console.log(1000000.000) The Prettier Remove The Zeros Because It Has No Value And Don't Show It In Console
console.log(1000000.123);

console.log(4_800_000.0); // console.log(4_800_000.0000)
console.log(4_800_000.25);

// BigInt
// We have a max number in language [Limit], BigInt allows you to make a number bigger [limit] than the language provide to you
console.log(BigInt);
console.log(typeof BigInt);

// The Highest/ Lowest Security Number That Can Be Used
// A Number That Does Not Produce Strange Results
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER + 5_000); // We can add a numbers to it, problem
console.log(Number.MIN_SAFE_INTEGER - 5_000);

// The last number you can reach in the language
console.log(Number.MAX_VALUE);
console.log(Number.MAX_VALUE + 235443439); // The same result, Nothing can be added to it because it is the last value in the language

console.log(Number.MIN_VALUE); // Positive number
console.log(Number.MIN_VALUE - 3_250);
// MIN_VALUE is the value closest to 0.

console.clear();

/*
	Number Methods [A ready-made procedure that implements a specific idea/ action]
	- Two Dots To Call A Methods
	- toString()
	- toFixed()
	- parseInt()
	- parseFloat()
	- isInteger() [ES6]
	- isNaN()     [ES6]
*/

// toString [Method returns a string representing the specified Number object.]
console.log((100).toString());
console.log(typeof (100).toString());

//console.log(100..toString()); // This shape console.log(100.toString()); number then fraction
//console.log(100.10.toString()); // prettier change the shape when press on save

// toFixed [The number of digits to appear after the decimal point] Return a String
console.log((100.555555).toFixed(2)); // Round up
console.log((100.554444).toFixed(2));
console.log((55.775).toFixed()); // The same console.log((55.775).toFixed(0))
console.log((125.0).toFixed(2)); // console.log((125.0000).toFixed(2))

console.log(typeof (100.555555).toFixed(2));

// parseInt [Function parses a string argument and returns an integer of the specified radix.] Return a Number
console.log(parseInt("100"));
console.log(+"100");
console.log(Number("100"));

console.log(+"100 Yaser");
console.log(Number("100 Yaser"));
console.log(parseInt("100 Osama")); // [Data analysis then return a number]

console.log(parseInt("Yaser 100")); // NaN
console.log(parseInt("Yaser 100 Yaser"));

// parseFloat;  [Function parses an argument (converting it to a string first if needed) and returns a floating point number.]
console.log(parseFloat("100 Yaser"));

console.log(parseFloat("100.500 Yaser"));
console.log(parseInt("100.500 Yaser")); // [Return An integer is one that can be written without using fractions or decimals]

console.log(parseInt("450"));
console.log(parseFloat("450"));

console.log(parseInt("Yaser")); // NaN
console.log(parseFloat("Yaser")); // NaN
console.log(+"Yaser"); // NaN
console.log(Number("Yaser")); // NaN

// isInteger [Method determines whether the passed value is an integer.] Return true OR false
// [Integer Number is one that can be written without using fractions or decimals.]
console.log(Number.isInteger("100")); // String
console.log(Number.isInteger(100.5)); // Float
console.log(Number.isInteger(100)); // Integer

// isNaN [Function determines whether a value is NaN or not.]
console.log(Number.isNaN(100)); // Number
console.log(Number.isNaN("Yaser")); // String
console.log(Number.isNaN("Yasers" / 20)); // NaN
console.log(Number.isNaN("Yaser" - 20)); // NaN

console.log(Number.isNaN("Yaser" + 20)); // + Concatenate Operator [false]
console.log("Yaser" + 20);
console.log(typeof ("Yaser" + 20));

console.log(Number.isNaN(+"Yaser" + 20));
console.log(+"Yaser" + 20);
console.log(typeof (+"Yaser" + 20));

console.log(typeof ("Yaser" / 20));
console.log(+"Yaser" / 20);
console.log(Number("Yaser" / 20));

console.clear();

/*
	Math Object
	- round()
	- ceil()
	- floor()
	- min()
	- max()
	- pow()
	- random()
	- trunc() [ES6]
*/

// round()
// [If the fractional portion of the argument is equal or greater than 0.5, the argument is rounded to the integer with the next higher absolute value. ]
// [If it is less than 0.5, the argument is rounded to the integer with the lower absolute value. ]

console.log(Math.round(99.2));
console.log(Math.round(99.5));

// ceil()
// [Function always rounds a number up to the next largest integer. ]

console.log(Math.ceil(99.2));
console.log(Math.ceil(99.5));
console.log(Math.ceil(99.1));

// floor()
// [Function returns the largest integer less than or equal to a given number. ]

console.log(Math.floor(99.2));
console.log(Math.floor(99.5));
console.log(Math.floor(99.9));

// min()
// [Returns the lowest-valued number passed into it. ]
// [Or NaN if any parameter isn't a number and can't be converted into one. ]

console.log(Math.min(10, 20, 100, -100, 90));
console.log(Math.min("Yaser", "Omar", "Ali"));
console.log(Math.min("Yaser", 30, 40));

// max()
// [Function returns the largest of the zero or more numbers given as input parameters. ]
// [Or NaN if any parameter isn't a number and can't be converted into one. ]

console.log(Math.max(10, 20, 100, -100, 90));

// pow()
// [A number representing the given base taken to the power of the given exponent. ]

console.log(Math.pow(2, 4));
// console.log(2 ** 4); // The same

// random()
// [Function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1). ]

console.log(Math.random());

// trunc()
// [Function returns the integer part of a number by removing any fractional digits. ]

console.log(Math.trunc(99.2));
console.log(Math.trunc(99.5));

console.clear();

/*
	Number Challenge
*/

let a = 1_00;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find smallest number in all variables and return integer

console.log(Number.parseInt(Math.min(a, b, c, d)));
console.log(Number.isInteger(Number.parseInt(Math.min(a, b, c, d))));

console.log(Math.trunc(Math.min(a, b, c, d)));
console.log(Number.isInteger(Math.trunc(Math.min(a, b, c, d))));

console.log(Math.round(Math.min(a, b, c, d)));
console.log(Number.isInteger(Math.round(Math.min(a, b, c, d))));

console.log(Math.ceil(Math.min(a, b, c, d)));
console.log(Number.isInteger(Math.ceil(Math.min(a, b, c, d))));

console.log(Math.floor(Math.min(a, b, c, d)));
console.log(Number.isInteger(Math.floor(Math.min(a, b, c, d))));

// Use variable a + d one time to get the needed output
// Ouput [10000]

console.log(Math.pow(a, Number.parseInt(d)));

console.log(Math.pow(a, Math.trunc(d)));

console.log(Math.pow(a, Math.round(d)));

console.log(Math.pow(a, Math.floor(d)));

// Get Integer "2" from d variable with 4 methods

console.log(Number.parseInt(d));

console.log(Math.trunc(d));

console.log(Math.round(d));

console.log(Math.floor(d));

console.log(d.toFixed()); // String

// Use variables b + d to get this values

// Output [66.67] => String

console.log((Number.parseInt(b) / Math.ceil(d)).toFixed(2));
console.log(typeof (Number.parseInt(b) / Math.ceil(d)).toFixed(2));

console.log((Math.floor(b) / Math.ceil(d)).toFixed(2));

console.log((Math.trunc(b) / Math.ceil(d)).toFixed(2));

// Output [67] => Number

console.log(Math.round(Math.floor(b) / Math.ceil(d)));
console.log(typeof Math.round(Math.floor(b) / Math.ceil(d)));

console.log(Math.ceil(Number.parseInt(b) / Math.ceil(d)));
console.clear();
