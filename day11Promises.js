// Activity 1
let myPromise = new Promise((resolve, reject) => {
  let error = true;
  if (!error) {
    setTimeout(() => {
      console.log("hello");
      resolve();
    }, 2000);
  }
  if (error) {
    reject("I am rejected");
  }
});

myPromise
  .then(() => {
    console.log("success");
  })
  .catch((err) => {
    console.log("failure", err);
  });

// Activity 2

let promiseTwo = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve({ username: "Gagu", age: 25 });
  }, 2000);
  // reject("I am rejected")
});

promiseTwo
  .then((data) => {
    console.log("data", data);
    return data?.username;
  })
  .then((username) => {
    console.log("username", username);
  });

// Activity 3

let promiseThree = new Promise((resolve, reject) => {
  setTimeout(() => {
    let error = true;
    if (!error) {
      resolve("I am resolved");
    }
    if (error) {
      reject("I am rejected");
    }
  }, 2000);
});

async function consumePromise() {
  try {
    const data = await promiseThree;
    console.log("data", data);
  } catch (error) {
    console.log("error", error);
  }
}

consumePromise();

// Activity 4

fetch("https://jsonplaceholder.typicode.com/todos/1").then((res) => {
  res.json().then((data) => {
    console.log("data", data);
  });
});

// Using async await

async function fetchData() {
  try {
    let data = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    data = await data.json();
    console.log("data111", data);
  } catch (error) {
    console.log("error", error);
  }
}

fetchData();

// Activity 5

let allPromise = Promise.all([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am also resolved");
    }, 2000);
  }),
]);

allPromise
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });

let racePromise = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am resolved");
    }, 2000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("I am also resolved");
    }, 2000);
  }),
]);

racePromise
  .then((data) => {
    console.log("data", data);
  })
  .catch((error) => {
    console.log("error", error);
  });
