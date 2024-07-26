// Acivity 1

// class Person{
//     name = "Gagan"
//     age = 23
//     greet (){
//         console.log(`Hello ${this.name} , you are ${this.age} years old`);
//     }
// }
// const person = new Person()
// console.log(person);
// person.greet()

// class Person {
//   name = "Gagan";
//   age = 23;
//   greet() {
//     console.log(`Hello ${this.name} , you are ${this.age} years old`);
//   }
// }

// const person = new Person();
// person.updateDetails = (name, age) => {
//   person.name = name;
//   person.age = age;
// };
// // console.log(person);

// person.updateDetails("John", 25);

// person.greet()

// Acivity 2

// class Student extends Person {
//   studentId = 101;
//   getStudentId() {
//     return this.studentId;
//   }

//   // Greet function overriding
//   greet() {
//     console.log(
//       `Hello ${this.name} , you are ${this.age} years old and your id is ${this.studentId}`
//     );
//   }
// }

// const student = new Student();
// console.log(student.getStudentId());


// Acivity 3

// class Person{
//     static name = "Gagan"
//     static age = 23
//     static greet(){
//         console.log(`Hello ${this.name} , you are ${this.age} years old`);
//     }
// }

// Person.greet()


// Activity 4

// class Person {

//     constructor(firstName , lastName){
//         this.firstName = firstName
//         this.lastName = lastName
//     }
//     // getter function
//     get fullName(){
//         return `${this.firstName} ${this.lastName}`
//     }
//     // setter function
//     set fullName(name){
//         const [firstName, lastName] = name.split(' ')
//         this.firstName = firstName
//         this.lastName = lastName
//     }
// }

// const person = new Person("John" , "Doe")
// console.log(person.fullName);

// person.fullName = "Gagan Deep"

// console.log(person.fullName)
