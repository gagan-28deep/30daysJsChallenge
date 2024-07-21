// Activity 1

let p = document.getElementById("demo");

// let div = document.getElementsByClassName("new");
// // It return the html collection

// p.innerHTML = "Hello";

// div[0].style.backgroundColor = "red"


// Activity 2
let newDiv = document.createElement("div");
let body = document.querySelector("body");
newDiv.innerHTML = "I am new div";
body.appendChild(newDiv)

let ul = document.querySelector("ul");
let newLi = document.createElement("li");
newLi.innerHTML = "I am new li";
ul.appendChild(newLi)

// Activity 3

// Remove newDiv from the body

body.removeChild(newDiv)

// remove the last child from specific HTML element

ul.removeChild(ul.lastElementChild)

// Activity 4

// let img = document.createElement("img");
// img.setAttribute("src" , "https://wallpapercave.com/wp/wp4162990.jpg");
// body.appendChild(img)

// Add and remove the css

let h2 = document.querySelector("h2");

// Remove a particular css
h2.style.removeProperty("color");

// Add a particular css
h2.style.color = "red";

// Activity 5

let button = document.querySelector("button");

button.addEventListener("click" , function(){
    p.style.color = "red"
})


button.addEventListener("mouseover" , function(){
    button.style.border = "10px solid green"
})