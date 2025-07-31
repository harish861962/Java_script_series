/*
JavaScript is a dynamic (or dynamically typed) language.
You don’t need to declare the type of a variable.

A variable can hold any type of value, and its type can change at runtime.
let data = 10;       // Number
data = "Hello";      // Now it's a String
data = true;         // Now it's a Boolean


Feature	 in JavaScript
Type Checking	At Runtime


2 type of datatype

1. primitive data types--- its call call by value 7 types of primitive data types
number , string , boolean , null , undefined, symbol ,  BigInt
 
2. non primitive data type --  its call call by reference
obejct , array , function   
*/

// array 

const heros = ["shaktimaan", "naaagraj" , "abvv"];

console.log(heros);

console.log(typeof heros); // object

// object 

let myObj = {
    age:22,
    name:"harish",

}

console.log(myObj);
console.log(typeof myObj);  //object

// funtion 

let MyFunction = function() {
    console.log("hello world");  
    }
    console.log(typeof MyFunction); // function object 