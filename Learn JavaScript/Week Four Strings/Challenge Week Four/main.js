/*
	String Challenge 
	All Solutions Must Be In One Chain
	You Can Use Concatenate
*/

let a = "Elzero Web School";

// Include This Methods In Your Solution [Slice, charAt]
// Output => Zero
console.log(a.charAt(2).toUpperCase() + a.slice(3, 6));

// Output => HHHHHHHH [8 H]
console.log(a.charAt(13).toUpperCase().repeat(8));
console.log(a.slice(13, 14).toUpperCase().repeat(8));
console.log(a[13].toUpperCase().repeat(8));
console.log(a.substring(13, 14).toUpperCase().repeat(8));
console.log(a.substr(13, 1).toUpperCase().repeat(8));

// Return Array
// Output => [Elzero]
console.log(a.split(" ", 1));

// Use Only "substr" Method + Template Literals In Your Solution
// Output => Elzero School
console.log(`${a.substr(0, 6)} ${a.substr(11, 6)}`);

// Solution Must Be Dynamic And String May Change
// Output => eLZERO WEB SCHOOl
console.log(
  `${a.charAt(0).toLowerCase()}${a
    .slice(1, a.length - 1)
    .toUpperCase()}${a.charAt(a.length - 1)}`
);

console.log(
  `${a[0].toLowerCase()}${a.substring(1, a.length - 1).toUpperCase()}${a.slice(
    -1
  )}`
);

console.log(a.length);
