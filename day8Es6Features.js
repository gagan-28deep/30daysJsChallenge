// Activity 1

let name = "Gagan"
let age = 23

// console.log(`My name is ${name} and I am ${age} years old`)

let str = `Hello EveryOne
I hope you are doing well
`

// console.log(str);

// Activity 2

let arr = [1,2,3,4,5,6]

let [firstElement , secondElement]  = arr
// let [firstElement , secondElement , ...rest]  = arr


// console.log(firstElement , secondElement );
// console.log(firstElement , secondElement , rest );


let book = {
    title: "Book 1",
    author: "John Doe",
    year: 2020,
}

let {author} = book
let {title} = book

// console.log(author , title);

// Activity 3


let newArr = [...arr , 7 , 8 , 9]
// console.log(newArr);


function addRest(num1 , ...rest) {
    return num1 + rest.reduce((a , b) => a + b , 0)
}

// console.log(addRest(1 , 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10))


// Activity 4

function prod(num1 , num2 = 1){
    return num1 * num2
}

// console.log(prod(5));

// console.log(prod(5 , 10));


// Activity 5

let obj = {
    name : "John",
    age : 23,
    "city" : "New York",
    // greet : function(){
    //     return `Hello ${this.name} , you are ${this.age} years old and you live in ${this.city}`
    // }
    greet (){
        return `Hello ${this.name} , you are ${this.age} years old and you live in ${this.city}`        
    }
}

console.log(obj.greet());


const propName1 = 'firstName';
const propName2 = 'age';
const propName3 = 'city';

const obj1 = {
    [propName1]: 'John',
    [propName2]: 23,
    [propName3]: 'New York'
};

console.log(obj1);