// A variable declared in the global scope is accessible from anywhere within the JavaScript code in the current document or environment. 

// Variables declared inside a { } block cannot be accessed from outside the block: // they are said to be in a "block scope".

// Variables declared inside a function are not accessible from outside the function: they are said to be in a "function scope".

// Variables declared with var are function-scoped, while variables declared with let and const are block-scoped.

// The scope of a variable is the context in which it is defined and can be accessed. 
// In JavaScript, there are three main types of scopes: global scope, function scope, and block scope.

let a=300; // Global scope variable

if(true){
    let b=400; // Block scope variable

    console.log(a); // Output: 300 (accessible)
    
    console.log(b); // Output: 400 (accessible) 
}
// console.log(b); // Output: ReferenceError: b is not defined (not accessible outside the block)




if (true){
    const username="harish"; // Block scope variable
    if(username === "harish"){
        const website = "youtube.com"; // Block scope variable   
        console.log(username + website); // Output: harishyoutube.com (accessible)
        
    }
    // console.log(website); // Output: ReferenceError: website is not defined (not accessible outside the inner block)    

    // console.log(username); // Output: harish (accessible)
    
}
// console.log(username); // Output: ReferenceError: username is not defined (not accessible outside the block)