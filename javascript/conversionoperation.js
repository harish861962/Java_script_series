let score = 33
console.log(score);
console.log(typeof(score)); //number
console.log(typeof score);

score = "33";
console.log(typeof(score));  //string
 
score = true;
console.log(typeof(score));  //boolean

score = null;
console.log(typeof(score));  //object   value 0

score = undefined;
console.log(typeof(score));  //undefined

score = Symbol("unique");
console.log(typeof(score));  //symbol

score = "33abc";
console.log(typeof(score));  //string

let valueInNumber = Number(score)
console.log(typeof valueInNumber ) // number
console.log(valueInNumber) // NaN (NOT A Number)

// "33" => 33
// "33abc" => NaN
// true => 1 ; false =>0


let isLoggedIn= 1;
let booleanIsLoggesIn = Boolean(isLoggedIn);
console.log(booleanIsLoggesIn);

// 1=> true; 0=> false;
// "" => false;
// "harish" => true;

let someNumber = 333;
let stringNumber = String(someNumber);
console.log(stringNumber);
console.log(typeof stringNumber)


