// Activity 1

function isEven(num) {
  if (num % 2 == 0) {
    return true;
  } else {
    return false;
  }
}

// console.log(isEven(9));

function sqaureNum(num) {
  return num * num;
}

const sq = sqaureNum(9);
// console.log(sq)

// Activity 2

const largerNum = function (num1, num2) {
  if (num1 > num2) {
    return num1;
  } else {
    return num2;
  }
};

const larger = largerNum(50, 10);
// console.log(larger);

const concateString = function (str1, str2) {
  return str1 + str2;
};

const str = concateString("hello", "world");
// console.log(str)

// Activity 3

const sum = (num1, num2) => {
  return num1 + num2;
};

const ans = sum(10, 20);
// console.log(ans)

const isStringContains = (str, x) => {
  if (str.includes(x)) {
    return true;
  }
  return false;
};

const result = isStringContains("hello", "c");
// console.log(result)

// Activity 4

const product = (num1, num2 = 5) => {
  return num1 * num2;
};

const ans1 = product(10);
// console.log(ans1)

const greet = (name, age = 18) => {
  return `Hello ${name} , you are ${age} years old`;
};

const ans2 = greet("john");
// console.log(ans2)

// Activity 5

const cb = () => {
  console.log("hello world");
};

const newfunction = (cb, num) => {
  // Call back function should be called num times
  for (let i = 0; i < num; i++) {
    cb();
  }
};

// newfunction(cb , 10)

const add2 = (value) => {
  return value + 2;
};

const multiplyBy4 = (value) => {
  return value * 4;
};


const hof = (func1 , func2)=>{
    return func1(func2(10));
}

const ansNew = hof(add2 , multiplyBy4);
console.log(ansNew)