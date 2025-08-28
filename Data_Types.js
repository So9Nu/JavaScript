/*
Data Types in js.
Number,String,Boolean,Undefined,Null,BigInt,Symbol.

primitive(7)
Non-Primitive



Primitive.
example,
let age=19;=> it is number datatype.
let name="sonu"=> it is String DataTypes.
let isSonu=true/false => it is boolean.
let x ; => it is undefined.
let y = null.=> it is null this is absence of data.



Non-primitive is a collections of value of data .
example,
const student={
fullname : "Sonu",
age:20,
cgpa=3.31,
isPass:true,

};
*/
// non-primitive.
const student={
fullname : "Sonu",
age:20,
cgpa:3.31,
isPass:true,

};

student["isPass"]="false"
for(let key in student){
    

    console.log(key,":",student[key])    // for in loop 
}

