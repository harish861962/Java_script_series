const mysym = Symbol('key1');

const JsUser ={
    name : "harish",
    "full name" : "Harish Kumar",
    age:22,
    email:"harish@google.com",
    [mysym] : "Mykey 1", // Using a symbol as a key

}
console.log(JsUser);
// console.log(JsUser[mysym]); // Accessing the value using the symbol key

//console.log(JsUser.email); // Accessing the value using the string key  / is old method

// console.log(JsUser["full name"]); // Accessing the value using the string key with space

JsUser.email = "harish@123.com"; // Updating the email property
console.log(JsUser.email); // Checking the updated email


JsUser.greeting = function(){
    console.log("Hello js user  ");
}
// console.log(JsUser.greeting()); // Logging the greeting method

// JsUser.greeting(); // Calling the greeting method 

JsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`); 
}
console.log(JsUser.greetingTwo()); // Logging the greetingTwo method

JsUser.greetingTwo = function(){
    console.log(`Hello js user , ${this.name}`); // Using template literals for string interpolation
}

console.log(JsUser.greetingTwo()); // Logging the greetingTwo method

// JsUser.greetingTwo(); // Calling the greetingTwo method 