/*
	Control Flow
		[Is how your computer runs code from top to bottom. It starts from the first 
		line and ends at the last line, unless it hits any statement that changes 
		the control flow of the program such as loops, conditionals, or functions.]
	- if
	- else if
	- else
*/

/*
	If syntax
		if (Condition) {
			// Block Of Code
		}

	else 
	[If all condition don't satisfy, run the else code.]
	[It don't have a condition.]
*/

/*
	Nested If Condition
*/

let price = 100;
let discount = false; // let discount = true;
let discountAmount = 30;
let country = "Egypt"; // let country = "KSA"; | let country = "Syria";
let student = true;
let privateStudent = true;

// Run the code line by line
if (discount === true) {
  price -= discountAmount; // price = price - discountAmount
} else if (country === "Egypt") {
  if (student === true) {
    if (privateStudent === true) {
      price -= discountAmount + 50;
    } else {
      price -= discountAmount + 30;
    }
  } else {
    price -= discountAmount + 10;
  }
} else if (country === "Syria") {
  price -= discountAmount + 20;
} else {
  price -= 0.5 * discountAmount;
}

console.log(price);

/*
Conditional (Ternary) Operator
*/

let theName = "Omar";
let theGender = "Male";
let theAge = 30;

if (theGender === `Male`) {
  console.log(`Mr`);
} else {
  console.log(`Mrs`);
}

// Condition ? If True : If False
theGender === `Male` ? console.log(`Mr`) : console.log(`Mrs`);

let result = theGender === `Male` ? `Mr` : `Mrs`;
console.log(`${result}`);

console.log(theGender === `Male` ? `Mr` : `Mrs`);

if (theGender === `Male`) {
  console.log(`Hello Mr ${theName}`);
} else {
  console.log(`Hello Mrs ${theName}`);
}

console.log(`Hello ${theGender === `Male` ? `Mr` : `Mrs`} ${theName}`);

console.log(
  theGender === `Male` ? `Hello Mr ${theName}` : `Hello Mrs ${theName}`
);

// Age
theAge < 20
  ? console.log(20)
  : theAge > 20 && theAge < 60
  ? console.log(`20 To 60`)
  : theAge > 60 && theAge < 80
  ? console.log(`Larger than 60`)
  : console.log(`Unknown`);

// The color of car and price
let theColor = `white`;

theColor === `black`
  ? console.log(`The price of ${theColor} car is 8000$`)
  : theColor === `white`
  ? console.log(`The price of ${theColor} car is 7500$`)
  : theColor === `gray`
  ? console.log(`The price of ${theColor} car is 7000$`)
  : console.log(`The price of ${theColor} car is 6800$`);

if (theGender === `Male`) {
  console.log(`Hello Mr ${theName}`);
} else {
  console.log(`Hello Mrs ${theName}`);
}

console.log(
  theGender === `Male` ? `Hello Mr ${theName}` : `Hello Mrs ${theName}`
);

theGender === `Male`
  ? console.log(`Hello Mr ${theName}`)
  : console.log(`Hello Mrs ${theName}`);

let theFinal =
  theGender === `Male` ? `Hello Mr ${theName}` : `Hello Mrs ${theName}`;

console.log(theFinal);

console.log(
  theGender === `Male` ? `Hello Mr ${theName}` : `Hello Mrs ${theName}`
);

/*
  Logical Or ||
  -- Null + Undefined + Any Falsy Value [on this type of information]
  Nullish Coalescing Operator ??
  -- Null + Undefined
*/

// Alternative information instead of the original information
// In this state [any problem, don't return the desired output]

// let thePrice = 100;
let thePrice; // output [undefined], Undefined
// let thePrice = null; // output [null], Empty
// let thePrice = 0; // Not logical, you can write [Free] | Falsy Value
// let thePrice = false; // Falsy Value
// let thePrice = ""; // Falsy Value

console.log(`The Price Is ${thePrice}`);
console.log(`The Price Is ${thePrice || 200}`); // Logical Or
console.log(`The Price Is ${thePrice ?? 200}`);

// How i can know the information [true or false]
console.log(Boolean(100));
console.log(Boolean(-100));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
