function sayMyName(){
    //console.log("My name is John Doe");
}
// sayMyName(); // Output: My name is John Doe 


// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2); 
// }

// addTwoNumbers(5, 10); 

function addTwoNumbers(num1, num2){
    return num1 + num2; 
    console.log("harish"); // This line will not execute because after return no anything print
}

let result = addTwoNumbers(5, 10);
// console.log(result); // Output: 15


const userLogin = function(username = "saini"){            // Default parameter value is "saini"
    if(username === undefined){
       // console.log("Please enter a username");
        return
    }
    return ` ${username} just logged in successfully`;
}
// console.log(userLogin("harish")); // Output: [Function: userLogin]

// userLogin();
 // console.log(userLogin("harish")); // Output: User harish just logged in successfully

 // console.log(userLogin()); // Output: Please enter a username
 




 function calculateCartPrice(...num1){ // Rest parameter syntax allows us to pass any number of arguments as an array
    return num1
 } 

 // console.log(calculateCartPrice(10, 20, 30, 40)); // Output: [ 10, 20, 30, 40 ]
 
 function calculateVal(val1 , val2 , ...num2){
    return num2
 }

 
 const user ={
    username: "harish",
    email: "gmail.com",
    price: 1000,
}

function handleObject(anyObject){
console.log(`Username is : ${anyObject.username}, Email is : ${anyObject.email}, Price is : ${anyObject.price}`);

}

// handleObject(user); // Output: Username is : harish, Email: gmail.com, Price: 1000

// handleObject({
//     username: "saini",
//     email: "saini@.com"
// })


// in function array passing

const muNewArray = [100, 200, 300, 400, 500];

function getSecondValue(GetArray){
    return GetArray[1]; // Returns the second value of the array    

}

console.log(getSecondValue(muNewArray)); // Output: 200

console.log(getSecondValue([1000,4000,5000])); // Output: 4000 another option print



