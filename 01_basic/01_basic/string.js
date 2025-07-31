let name = "harish";
rollNumber = 5;
console.log(name+" "+rollNumber); // string concatenation old method

// String interpolation in JavaScript is a method for embedding expressions directly
// within string literals, making it easier to construct dynamic strings.



console.log(`hello my name is ${name.toUpperCase()} and roll number is ${rollNumber}`); // string interpolation new method

console.log(name.length); // length of string

console.log(name[0]); // accessing character at index 0

console.log(name.charAt(2)); // accessing character at index 2 using charAt method

console.log(name.indexOf("r")); // finding index of character 'r'


// String interpolation is often done using template literals, which are enclosed in backticks (``).
// This allows for easier and more readable string construction compared to traditional concatenation methods.


// Template literals are enclosed by backticks (``) instead of single or double quotes.
// They can contain placeholders, which are indicated by the dollar sign and curly braces (${expression}).

// This allows for multi-line strings and string interpolation in a more readable way.
// Template literals can also include expressions, which are evaluated and included in the resulting string.