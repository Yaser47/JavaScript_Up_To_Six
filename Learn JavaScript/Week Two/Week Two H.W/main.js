// Question 1
let numberOne = 10,
  numberTwo = 20;

console.log(numberOne + "" + numberTwo);

console.log(typeof (numberOne + "" + numberTwo));

console.log(`${numberOne}${numberTwo}`);

console.log(typeof `${numberOne}${numberTwo}`);

console.log(numberOne + "\n" + numberTwo);
console.log((numberTwo + "\n" + numberOne + "\n").repeat(2));

console.log(`${numberOne}
${numberTwo}`);
console.log(
  `${numberTwo}
${numberOne}
`.repeat(2)
);

// Question 2
console.log(elzero.innerHTML);
console.log(typeof elzero);

// Question 3
// console.log("`I'm In \n \\\\ \n Love \\\\ \"\"\" ''' \n ++ With ++ \n \\\"\"\"\\\"\"\" \n \"\"JavaScript\"\"``");
console.log(`\`I'm In
\\\\
Love \\\\ """ '''
++ With ++
\\"""\\"""
""JavaScript""\`\``);

// Question 4
let a = 21,
  b = 20;
let c = `_${b}${a}`.repeat(3);

console.log(`_${a}${c}_${b}_`);

console.log(`_${a}_${b}${a}_${b}${a}_${b}${a}_${b}_`);
console.log("_" + a + "_" + b + a + "_" + b + a + "_" + b + a + "_" + b + "_");
