 
// IIFE 

// An IIFE in JavaScript means Immediately Invoked Function Expression —
// it’s a function that runs immediately after it’s defined.

// Why use IIFE? 

// Avoid polluting the global scope (variables stay private).

// Run code immediately without needing to call it later.

// Create a private scope for variables and functions.


(function() {
    console.log("I run immediately!");
})();

// or with arrow function:

((name) => {

console.log(`Arrow IIFE running! ${name}`);  // parameter pass 
})('harish');
 