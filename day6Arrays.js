// Activity -1

// const arr = [1,2,3,4,5]
// console.log(arr);

// console.log(arr[0]);
// console.log(arr[arr.length - 1]);


// Activity -2
const arr1 = [1,2,3,4,5]

arr1.push(6)
// console.log(arr1);

arr1.pop()
// console.log(arr1);

arr1.unshift(0)
// console.log(arr1);

arr1.shift()
// console.log(arr1);



// Activity -3

let arr = [1,2,3,4,5]

// const mapArr = arr.map((ele)=>(
//     ele * 2
// ))

const mapArr = arr.map((ele)=>{
    return ele * 2
})

console.log(mapArr);

// const filterArr = arr.filter((ele)=>{
//     return ele % 2 === 0
// })

const filterArr = arr.filter((ele)=>(
    ele % 2 === 0
))

console.log(filterArr);


const reduceArr = arr.reduce((ele , acc)=>{
    return ele + acc
} , 0)

console.log(reduceArr);


// Activity -4

// for (let index = 0; index < arr.length; index++) {
//     const element = arr[index];
//     console.log(element);
    
// }


arr.forEach((ele)=>{
    console.log(ele);
})

// Activity -5

const twoDimArr = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

console.log(twoDimArr);

console.log(twoDimArr[1][1]);
