let  myDate = new Date();
console.log(myDate);
console.log(myDate.toString()); // Outputs the date in a human-readable format

console.log(myDate.toISOString()); // Outputs the date in ISO format

console.log(myDate.toLocaleDateString()); // Outputs the date in a locale-specific format

console.log(myDate.toLocaleTimeString()); // Outputs the time in a locale-specific format

console.log(myDate.toJSON()); // Outputs the date in JSON format

console.log(myDate.toTimeString()); // Outputs the time in a human-readable format

console.log(typeof myDate); // Outputs "object" since Date is an object in JavaScript


// let myDateTwo = new Date(2023, 9, 1); // Note: Months are 0-indexed (0 = January, 1 = February, ..., 9 = October)

// let myDateTwo = new Date("01-14-2023"); // Corrected to use the format YYYY-MM-DD

let myDateTwo = new Date(2023, 9, 1 , 5, 30, 0); // Creates a date for October 1, 2023 at 05:30:00

console.log(myDateTwo.toLocaleString()); // Outputs the date for October 1, 2023
