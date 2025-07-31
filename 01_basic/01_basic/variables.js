const accountid = 212321;
let accountEmail = "harish123@gmail.com";
var accountHolderName ="Harish";
accountCity ="jaipur";

/* 
prefer not use to var
because of issue in block scope and funtional scope
  */

let accountState;
// console.log(accountid);
console.table([accountid,accountEmail,accountHolderName,accountState,accountCity])

