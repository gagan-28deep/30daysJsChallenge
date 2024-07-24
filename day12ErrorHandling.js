// Activity 1

// function handleError (err)  {
//     throw err
// }

// THis is handling the error
// try {
//     let res = handleError("I am an error")
//     console.log("res -> ", res);
// } catch (error) {
//     console.log("error", error);
// }

// THis is just throwing an error
// let err =  handleError("I am an error")
// console.log("err -> ", err);

function divide(a, b) {
  if (b === 0) {
    throw "Can't divide by zero";
  }
  return a / b;
}

try {
  let res = divide(10, 0);
  console.log("res -> ", res);
} catch (error) {
  console.log("error", error);
}

// Activity 2

// Finally block will always be executed
try {
  let res = divide(10, 0);
  console.log("res -> ", res);
} catch (error) {
  console.log("error", error);
} finally {
  console.log("finally");
}

// Activity 3

class CustomError extends Error {
  constructor(message, code) {
    super(message);
    this.name = this.constructor.name;
    this.code = code;
  }
}

function riskyFunction() {
  const randomNumber = Math.random();
  if (randomNumber < 0.5) {
    throw new CustomError("Something went wrong!", 500);
  } else {
    return "Operation succeeded!";
  }
}

// Main function to demonstrate error handling
function main() {
  try {
    const result = riskyFunction();
    console.log(result);
  } catch (error) {
    if (error instanceof CustomError) {
      console.error(
        `CustomError caught: ${error.message} (Code: ${error.code})`
      );
    } else {
      console.error(`General error caught: ${error.message}`);
    }
  }
}

// Run the main function
main();

function checkString(str) {
  if (!str || str === "") {
    throw "String is empty";
  }
  return str;
}

try {
  let res = checkString("jcd");
  console.log("res -> ", res);
} catch (error) {
  console.log("error", error);
}

// Activity 4

const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log("randomNumber", randomNumber);
    if (randomNumber > 7) {
      resolve(randomNumber);
    } else {
      reject("I am rejected");
    }
    console.log("hello");
  }, 2000);
});

myPromise
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

async function consumePromise() {
  try {
    let res = await myPromise;
    console.log("res", res);
  } catch (error) {
    console.log("error");
  }
}

consumePromise();

// Activity 5

function fetchData() {
  const invalidUrl = "https://invalid.url/endpoint";

  fetch(invalidUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Network response was not ok: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data fetched successfully:", data);
    })
    .catch((error) => {
      console.error("Fetch error:", error.message);
    });
}

fetchData();

async function fetchDataAsync() {
  const invalidUrl = "https://invalid.url/endpoint";

  try {
    let res = await fetch(invalidUrl);
    if (!res.ok) {
      throw new Error(`Network response was not ok: ${res.statusText}`);
    }
    let data = await res.json();
    console.log("Data fetched successfully:", data);
  } catch (error) {
    console.log("Fetch error111:", error.message);
  }
}


fetchDataAsync()