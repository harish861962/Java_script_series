// stack (primitive data types) and heap memory (reference data types) in JavaScript


let myYoutubeName = "harishsaini"; 

let anotherName = myYoutubeName; // primitive data type, copied by value
anotherName = "harish"; // changing anotherName does not affect myYoutubeName
console.log(myYoutubeName); // harishsaini
console.log(anotherName); // harish

let userOne = {
    email:"harish@google.com",
    userName: "saini",
}

let userTwo = userOne; // reference data type, copied by reference

userTwo.email = "google.com"; // changing userTwo affects userOne

console.log(userOne.email); // google.com

console.log(userTwo.email); // google.com

// Primitive data types are stored in stack memory, while reference data types are stored in heap memory.
// Primitive data types include number, string, boolean, undefined, null, bigint, and symbol.
// Reference data types include objects, arrays, and functions.