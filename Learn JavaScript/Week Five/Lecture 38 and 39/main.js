/*
	Swith Statement [Control the flow of the code same as if, else condition]
	swich(expression) {
		case 1: 
			// Code Block
			break;
		case 2: 
			// Code Block
			break;
		default: 
			// Code Block
	}
*/

/* 
	Switch statement => compare with identical operator
		let day = "2"; => [not the same] let day = 2; 
		same type and same value with [case]
*/

let day = 3;

switch (day) {
  case 0:
    console.log(`Saturday`);
    break;
  case 1:
    console.log(`Sunday`);
    break;
  case 2: // Multiple cases [same output | block of code]
  case 3:
    console.log(`Monday`);
    break;
  default:
    console.log(`Unknown Day`);
}

console.log(`------------------`);
// Break [Stop the check]
// Default [You can put it in the top or bottom in switch statement]

let user = 1;

switch (user) {
  case 1:
    console.log(`Yaser`);
  case 1:
    console.log(`Omar`);
}

// case 1 repeat twice | take the first one only [use Break] [I found what i need]

let userName = 1;
switch (userName) {
  default:
    console.log(`Unknown user name`);
    break;
  case 1:
    console.log(`Yaser`);
    break;
  case 1:
    console.log(`Omar`);
}

console.log(`------------------`);

let card = 2;

switch (card) {
  case 1:
    console.log(`Goal Keeper`);
    break;
  case 2:
    console.log(`Right Back`);
    break;
  case 3:
  case 4:
    console.log(`Center Back`);
    break;
  case 5:
    console.log(`Left Back`);
    break;
  case 6:
    console.log(`Center Defensive Midfielder`);
    break;
  case 7:
  case 8:
    console.log(`Center Midfielder`);
    break;
  case 9:
    console.log(`Striker`);
    break;
  case 10:
    console.log(`Right Wing`);
    break;
  case 11:
    console.log(`Left Wing`);
    break;
  default:
    console.log(`Substitute Player`);
    break;
}

console.clear();
// Challenge video 39

// Convert to switch statement

let job = "Manager";
let salary = 0;

if (job === "Manager") {
  salary = 8000;
} else if (job === "IT" || job === "Support") {
  salary = 6000;
} else if (job === "Developer" || job === "Designer") {
  salary = 7000;
} else {
  salary = 4000;
}

console.log(`My salary is ${salary}`);

switch (job) {
  case "Manager":
    salary = 8000;
    console.log(`My salary is ${salary}`);
    break;
  case "IT":
  case "Support":
    salary = 6000;
    console.log(`My salary is ${salary}`);
    break;
  case "Developer":
  case "Designer":
    salary = 7000;
    console.log(`My salary is ${salary}`);
    break;
  default:
    console.log(`My salary is ${salary}`);
}

console.log(`------------------`);
// Convert to if statement

let holidays = 2;
let money = 0;

switch (holidays) {
  case 0:
    money = 5000;
    console.log(`My Money is ${money}`);
    break;
  case 1:
  case 2:
    money = 3000;
    console.log(`My Money is ${money}`);
    break;
  case 3:
    money = 2000;
    console.log(`My Money is ${money}`);
    break;
  case 4:
    money = 1000;
    console.log(`My Money is ${money}`);
    break;
  case 5:
    money = 0;
    console.log(`My Money is ${money}`);
    break;
  default:
    money = 0;
    console.log(`My Money is ${money}`);
}

if (holidays === 0) {
  money = 5000;
  console.log(`My Money is ${money}`);
} else if (holidays === 1 || holidays === 2) {
  money = 3000;
  console.log(`My Money is ${money}`);
} else if (holidays === 3) {
  money = 2000;
  console.log(`My Money is ${money}`);
} else if (holidays === 4) {
  money = 1000;
  console.log(`My Money is ${money}`);
} else if (holidays === 5) {
  money = 0;
  console.log(`My Money is ${money}`);
} else {
  money = 0;
  console.log(`My Money is ${money}`);
}
