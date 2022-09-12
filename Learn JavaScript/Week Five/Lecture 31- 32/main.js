/*
	Comparison Operators [Compare two values and yield a logical (boolean) result.]
	- == Equal 
	- != Not Equal 

	- === Identical 
	- !== Not Identical 

	- > Larger Than
	- >= Larger Than Or Equal

	- < Smaller Than
	- <= Smaller Than Or Equal
*/

//  = [Assignment Operator => Assing Vales To Javascript Variables.]

// == Equal
// [Checks whether its two operands are equal, returning a Boolean result.]
// [Compare operands that are of different types.]

console.log(10 == "10"); // Compare Value Only
console.log(-100 == "-100");

// != Not Equal
// [Checks whether its two operands are not equal, returning a Boolean result. ]
// [Compare operands that are of different types.]

console.log(10 != "10"); // Compare Value Only

// Identical === [Strict Equality]

console.log(10 === "10"); // Compare Value + Type [Compare Number And String]

// Not Identical !==

console.log(10 !== "10"); // Compare Value + Type
console.log(10 !== 10); // Same Value [10] | Same Tyep [Number]

// > Larger Than
// >= Larger Than Or Equal

console.log(10 > 20);
console.log(10 > 10);
console.log(10 >= 10); // Two Condition [Larger | Equal] [10 = 10]

// < Smaller Than
// <= Smaller Than Or Equal

console.log(10 < 20);
console.log(10 < 10);
console.log(10 <= 10);

// Simple Question
// Output [True] => Don't Change Any Thing
console.log("Osame" === "Ahmed");

console.log(typeof "Osame" === typeof "Ahmed"); // [String === String]

console.clear();

/*
  Logical Operators
  - ! Not
  - && And
  - || Or
*/

// ! Not
// [Takes Truth to Falsity and vice versa.]
// [Convert False to True | True to False]

console.log(true);
console.log(!true);

console.log(false);
console.log(!false);

console.log(+true);
console.log(+!true); // +false => 0

console.log(+false);
console.log(+!false); // +true => 1

console.log(!(10 == "10")); // console.log(10 == "10") True | !true => False

// && [Double Ampersand] And
// [It returns a Boolean value.]
// [For a set of boolean operands will be true if and only if all the operands are true. Otherwise it will be false.]
// [Fulfill all condition.]

console.log(10 == "10" && 10 > 8 && 10 >= 10); // true && true && true => true
console.log(10 == "10" && 10 > 8 && 10 > 50); // true && true && false => false

// || [Double Pipeline] Or
// [It returns a Boolean value.]
// [For a set of operands is true if and only if one or more of its operands is true.]

console.log(10 == "10" || 10 > 8 || 10 > 50); // true || true || false => true
console.log(10 == "10" || 10 > 80 || 10 > 50); // true || false || false => true

console.clear();
