// Activity 1

function addNum(num1, num2) {
  return num1 + num2;
}

const user = {
  name: "John",
  age: 23,
  greet: function () {
    console.log(`Hello ${this.name} , you are ${this.age} years old`);
  },
};

// Activity 2
function prod(num1, num2 = 1) {
  return num1 * num2;
}

function sub(num1, num2) {
  return num1 - num2;
}

// Activity 3 is also done

module.exports = { addNum, user, prod };

module.exports.sub = sub