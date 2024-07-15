// Activity 1
let num = 0;

if (num > 0) {
  console.log("positive");
}
if (num < 0) {
  console.log("negative");
}
if (num === 0) {
  console.log("zero");
}

let voteAge = 13;

if (voteAge >= 18) {
  console.log("eligible to vote");
} else {
  console.log("not eligible to vote");
}

// Activity 2

let num1 = 18;
let num2 = 4;
let num3 = 5;

// Largest of the three number using nested if

if (num1 > num2 && num1 > num3) {
  console.log("num1 is largest");
} else if (num2 > num1 && num2 > num3) {
  console.log("num2 is largest");
} else {
  console.log("num3 is largest");
}

// Activity 3

let day = 8;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

let score = 70;

switch (true) {
  case score >= 85:
    console.log("A");
    break;
  case score >= 70 && score < 85:
    console.log("B");
    break;
  case score >= 60 && score < 70:
    console.log("C");
    break;
  case score >= 50 && score < 60:
    console.log("D");
    break;
  default:
    console.log("F");
}

// Activity 4

let number = 9;

const isEven = number % 2 === 0 ? true : false;
console.log(isEven);

// Activity 5

let year = 2026;

// Check if it leap year

if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
  console.log("leap year");
} else {
  console.log("not a leap year");
}
