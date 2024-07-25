const mod1 = require("./mod1");
const sub = require("./mod1").sub;
const axios = require("axios");
const _ = require("lodash");

// Activity 1
const ans = mod1.addNum(2, 4);

console.log("ans", ans);

console.log("user from mod1", mod1.user);

// Activity 2
const prd = mod1.prod(5, 2);
console.log("prd", prd);

const subAns = sub(10, 5);
console.log("subAns", subAns);

// Activity 3 is also done

// Activity 4

async function fetchData() {
  try {
    let resp = await axios.get("https://jsonplaceholder.typicode.com/todos/1");
    console.log("resp", resp?.data);
  } catch (error) {
    console.log("error", error);
  }
}

fetchData();

// Activity 5
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const res = _.filter(arr, (num) => num > 5);
console.log("res", res);