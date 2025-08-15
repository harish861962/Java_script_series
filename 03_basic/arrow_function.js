// this keyword use 

// The this keyword in JavaScript refers to the context in which a piece of code, such as a function's body, is executed. Its value is determined by how a function is called and can change depending on the execution context. 


const user = {
    username: 'harish',
    age:22,
    welcomeUsers: function(){
        console.log(`${this.username}, welcome `);
        
    }
}
user.welcomeUsers();


// const users = {
//     name: 'Harish',
//     greet: function() {
//         console.log(`Hi ${this.name}`);
//     }
// };

// users.greet(); 

// Output: Hi Harish


                                // write  arrow functions methods
// arrow function 

// Arrow functions, introduced in ES6 (ECMAScript 2015), provide a concise syntax for writing function expressions in JavaScript. They offer a shorter way to define functions and have distinct characteristics compared to traditional function expressions.

// // types  Syntax:
// The basic syntax of an arrow function is:

// let functionName = (parameter1, parameter2, ...) => {
//   // function body
//   return value; // optional
// };

// example -  // const adds = (num1 , num2) =>{
// return num1 + num2
// } 

// console.log(adds(4,5));

// Implicit Return: If the function body consists of a single expression, you can omit the curly braces {} and the return keyword. The result of the expression will be implicitly returned



// const addtwo = (num1 , num2) => num1 + num2
// console.log(addtwo(2,3));




// const add = (num1 , num2) => (num1 + num2)
// console.log(add(2,3));



// const addtwo = (num1 , num2) => num1 + num2
// console.log(addtwo(2,3));

