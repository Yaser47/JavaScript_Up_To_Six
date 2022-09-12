/*
	Arrays
	- Create Arrays [Two Methods] => new Array() + [] Preferred
	- Access Arrays Elements
	- Nested Arrays
	- Change Arrays Elements
	- Check For Array => Array.isArray(arr);
*/

/*
	Array
	- It is a single variable that is used to store different elements. 
	- It is often used when we want to store list of elements and access them 
		by a single variable.
	- It resizable and contain a mix of different data types.
	- It zero-indexed.
*/

// Create Arrays

let myFriends = ["Ahmed", "Mohamed", "Sayed", ["Marwan", "Ali"]];

// Access Arrays Elements => using index or position

console.log(`Hello ${myFriends[0]}`);
console.log(`Hello ${myFriends[2]}`);

console.log(`${myFriends[1][2]}`);
console.log(`${myFriends[1].charAt(2)}`);

// Nested Arrays

console.log(`Hello ${myFriends[3]}`); // All Array Elements
console.log(`Hello ${myFriends[3][1]}`); // Ali
console.log(`${myFriends[3][1][2]}`); // i
console.log(`${myFriends[3][1].charAt(2)}`); // i

// Change Arrays Elements

console.log(myFriends);
myFriends[1] = "Gamal";
console.log(myFriends);

myFriends[3] = ["Sameh", "Ameer"];
console.log(myFriends);

myFriends[3] = "Omar";
console.log(myFriends);
console.log(`Hello ${myFriends[3]}`);

// Check For Array

console.log(typeof myFriends); // object

console.log(Array.isArray(myFriends)); // true

let str = "Yaser";
console.log(Array.isArray(str)); // false [string]

console.clear();

/*
	Array Methods
	- Length [Returns or sets the number of elements in a given array.]
*/

// Index start from 0 [0, 1, 2, 3]
// Length start from 1 [1, 2, 3, 4]
// Length = index + 1

let ourFriends = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(ourFriends.length); // 4 elements

// Modify index 3
ourFriends[3] = "Gamal";
console.log(ourFriends);

// Index is not exist
ourFriends[6] = "Omar";
console.log(ourFriends);

console.log(ourFriends.length); // 7 elements

// Dynamic way to add element in the end of array [no need to write the number of index]
ourFriends[ourFriends.length] = "Karam";
console.log(ourFriends);

console.log(ourFriends.length); // 8 elements

// Dynamic way update the last element in the array [Replace], not add
ourFriends[ourFriends.length - 1] = "Osama";
console.log(ourFriends);

console.log(ourFriends.length);

// Control the number of element in the array
ourFriends.length = 3;
console.log(ourFriends);

console.clear();

/*
	Array Methods [Adding and Removing]
	- unshift("", "") Add element/ elements to the first [Adding]
	- push("", "") Add element/ elements to the end      [Adding]
	- shift() Remove first element from array            [Removing]
	- pop() Remove last element from array               [Removing]
*/

let myTest = ["Ahmed", "Mohamed", "Sayed", "Alaa"];

console.log(myTest);
console.log(myTest.length);

// unshift
/*
	method adds one or more elements to the beginning of an array and returns 
	the new length of the array.
*/

myTest.unshift("Osama", "Nabil");
console.log(myTest);

console.log(myTest.length);

// push
/*
	method adds one or more elements to the end of an array and returns the new 
	length of the array.
*/

myTest.push("Samah", "Eman");
console.log(myTest);

console.log(myTest.length);

// shift
/*
	method removes the first element from an array and returns that removed 
	element. This method changes the length of the array.
*/

// myTest.shift();
// console.log(myTest);
// console.log(myTest.length);

let first = myTest.shift();
console.log(myTest);

console.log(first);
console.log(`First name is ${first}`);

// pop
/*
	method removes the last element from an array and returns that element. 
	This method changes the length of the array.
*/

let last = myTest.pop();
console.log(myTest);

console.log(last);
console.log(`Last name is ${last}`);

console.clear();
