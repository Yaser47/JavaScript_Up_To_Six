/*
	String Methods
	- Access With Index
	- Access With charAt()
	- length
	- trim()
	- toUpperCase()
	- toLowerCase()
	- Chain Methods
*/

let theName = "Ahmed";
let theList = [1, 2, 3, 4, 5]; // Array

// Index [write the index]
// [It contains the regular expression match position within the sequence. ]
// [Zero based index/ The first element of an array is at index 0. ]

console.log(theName);
console.log(theName[1]);
console.log(theName[5]); // Undefined/ Index start from 0. [01234]

console.log(theList);
console.log(theList[0]);
console.log(theList[4]);

// charAt() [character at position]
// [Method returns the character at a specified index (position) in a sequence. ]
// [Write the position/ index, will return the character on that position/ index. ]

console.log(theName.charAt(1));
console.log(theName.charAt(5)); // Empty

console.log(theName[5]); // undefined
console.log(theName.charAt(5)); // Empty

// length
// [Contains the length of the string/ Count the number of elements in the sequence ]
// [It start from 1. ]

console.log(theName.length);

console.log("--------------------");

// trim()
// [Method removes whitespace from both ends of a string and returns a new string, without modifying the original string. ]

let theTest = "  Ahmed  ";

console.log(theName);
console.log(theTest);
console.log(theTest.trim());

// The space take a position
console.log(theTest[1]); // Ouput [space]
console.log(theTest[5]);
console.log(theTest.length);

console.log("--------------------");

// toUpperCase [Method returns the calling string value converted to uppercase. ]
// toLowerCase [Method returns the calling string value converted to lower case. ]

console.log(theName.toUpperCase());
console.log(theName.toLowerCase());

// Chain Methods

/*
	Task
	- Remove the whitespace in theTest variable
	- Write the [m] string in the console and converted it to upper case
*/

console.log(theTest.trim().charAt(2).toUpperCase()); // I remove the space so the index for m 2

console.clear();

/*
	String Methods
	- indexOf(Value [Mandatory], Start [Optional] 0 (default value))
	- lastIndexOf(Value [Mand], Start (Opt) Length)
	- slice(Start [Mand], End [Opt] Not Include End)
	- repeat(Times) [ES6]
	- split(Separator [Opt], Limit [Opt])
*/

let a = "Elzero Web School";

// indexOf
// [Method returns the index (position) of the first occurrence of a value in a string. ]
// [Method returns -1 if the value is not found. ]

console.log(a.indexOf("Web"));
console.log(a.indexOf("Web", 0));
console.log(a.indexOf("Web", 8)); // Don't find the "Web" value => -1

console.log(a.indexOf("o")); // Start from left (First o)

console.log(a.indexOf("e"));
console.log(typeof a.indexOf("e")); // Number

// lastIndexOf
// [Method returns the index (position) of the last occurrence of a specified value in a string. ]
// [Method searches the string from the end to the beginning. ]
// [Method returns the index from the beginning (position 0). ]
// [Method returns -1 if the value is not found. ]

console.log(a.lastIndexOf("Web"));

console.log(a.lastIndexOf("o")); // Start from right (Last index)
console.log(a.lastIndexOf("e"));

console.log(a.lastIndexOf("e", 9)); // length >= position (index)

// slice
// [Method extracts a part of a string. ]
// [Method returns the extracted part in a new string. ]

console.log(a.slice(0)); // 0 Index
console.log(a.slice(2, 5)); // Not include the end
console.log(a.slice(2, 6));
console.log(a.slice(2, 7)); // Include the space

console.log(a.slice(7, 10)); // Web
console.log(a.slice(7, 11)); // Web with space

// A negative number selects from the end of the string.
console.log(a.slice(-5)); // Start from -1 Not 0/ To end (to right)
console.log(a.slice(-5, -3)); // Not include the End (to right)/ c (-5), h(-4), o(-3) not include

console.log(a.slice(-8));
console.log(a.slice(-8, -4));

// repeat()
// [Method returns a string with a number of copies of a string. ]

console.log(a.repeat(3));
console.log(a.repeat(0)); // Empty

console.log("Yaser ".repeat(5));

// split
// [Method splits a string into an array of substrings. ]
// [Method returns the new array. ]

console.log(a.split()); // Return as Array, List/ If you don't determine the value of split return one array
console.log(a.split("")); // Seperator [The place from which it is cut]/ Cut all element
console.log(a.split(" ")); // At a spaces [If (" ") is used as separator, the string is split between words. ]
console.log(a.split(" ", 2));
console.log(a.split("", 6));

let theUser = "Elzero|Web|School";
console.log(theUser.split("|"));

console.log(a.split("e"));
console.log(a.slice(2, 7));

console.clear();

/*
	String Methods
	- substring(Start [Mand], End [Opt] Not Including End)
	--- Start > End Will Swap
	--- Start < 0 It Start From 0
	--- Use Length To Get Last Character
	- substr(Start [Mand], Characters To Extract)
	--- Start >= Length = ""
	--- Negative Start From End
	- includes(Value [Mand], Start [Opt] Default 0) [ES6]
	- startsWith(Value [Mand], Start [Opt] Default 0) [ES6]
	- endsWith(Value [Mand], Length [Opt] Default Full Length) [ES6]
*/

let b = "Elzero Web School";

console.log(b.length);
// substring [Close to slice]
// [Method extract characters, between two indices (positions), from a string, and returns the substring.]

console.log(b.substring(2)); // You didn't determine the End [Go to end of string]
console.log(b.substring(2, 6)); // Not including the End

console.log(b.substring(6, 2)); // Swap [The same result]

console.log(b.substring(-10)); // It start from index 0
console.log(b.substring(-10, 6)); // 0 - 6

console.log(b.substring(17)); // Empty [length => 17] [index => 16] I use index inside the bracket

console.log(b.substring(16)); // To end
console.log(b.substring(b.length - 1));

console.log(b.substring(b.length - 5));
console.log(b.substring(b.length - 5, b.length - 3));
console.log(b.substring(12));
console.log(b.substring(12, 14));

// substr
// [Method extracts a part of a string.]
// [Method begins at a specified position, and returns a specified number of characters.]
// [To extract characters from the end of the string, use a negative start position.]

console.log(b.substr(0)); // It start from index 0/ It take a full length
console.log(b.substr(0, 6)); // [Count the number of characters you need. ]

console.log(b.substr(17)); // Length => 17/ Empty value

console.log(b.substr(-3)); // [Count from the end of string.]/ It go to end

console.log(b.substr(-5));
console.log(b.substr(-5, 2)); // Print two character

// includes [Return => true/ false (Test)]
// [Method determines whether a string contains the given characters within it or not.]
// [This method returns true if the string contains the characters, otherwise, it returns false.]

console.log(b.includes("Web")); // Start from index 0
console.log(b.includes("Web", 7));

console.log(b.includes("Web", 8));

// startWith
// [Method returns true if a string starts with a specified string, Otherwise it returns false.]

console.log(b.startsWith("E"));
console.log(b.startsWith("E", 2)); // Position to start
console.log(b.startsWith("z", 2));
console.log(b.startsWith("zero", 2));

// endsWith
// [Method returns true if a string ends with a specified string, Otherwise it returns false.]

console.log(b.endsWith("o")); // Default full length
console.log(b.endsWith("l"));

console.log(b.endsWith("o", 6)); // Length start from 1 (Count the number of character you need)/ Elzero
console.log(b.endsWith("ro", 6));

console.clear();
