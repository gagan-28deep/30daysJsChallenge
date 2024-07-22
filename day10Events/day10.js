// Activity 1
let button = document.querySelector("button");

let p = document.querySelector("p");

button.addEventListener("click", () => {
  p.innerHTML = "Hello";
});

let img = document.querySelector(".img");
// console.log(img);

// img.addEventListener("dblclick", () => {
//   img.classList.toggle("hidden");
// });

// Activity 2

// console.log(p);

p.addEventListener("mouseover", () => {
  p.style.backgroundColor = "red";
});

p.addEventListener("mouseout", () => {
  p.style.backgroundColor = "";
});

// Activity 3

let input = document.querySelector("input");

input.addEventListener("keydown", (e) => {
  console.log(e.key);
});

input.addEventListener("keyup", (e) => {
  console.log(e.target.value);
});

// Activity 4

let btn = document.querySelector(".btn");
btn.addEventListener("click", (e) => {
  e.preventDefault();
  console.log("clicked");
});

let select = document.querySelector("select");
select.addEventListener("change", (e) => {
  console.log(e.target.value);
});


// Activity 5


