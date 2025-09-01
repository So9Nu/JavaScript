/**
 * prompt the user to enter thier full name . 
 * generate a username for them based on the input .
 * start username with @,followed by thier full 
 * name aand ending with the full lenght.
 */

// let str=prompt("Enter your full name:");
// let userName="@"+str+str.length;
// console.log(str.trim(userName));

let fullName=prompt("Enter your full name:");

let cleanName=fullName.replace(/\s+/g,"");

let userName="@"+cleanName+fullName.length;

alert("your user-name is:" + userName);
console.log(userName);

