// for of loop
// syntax.
/*
for (let val of strVar){

}
*/

let str ="sonu";

let len=0;

for(let val of str){
    console.log(val)
    len++;
}
console.log("String size =",len,"\n");

{

let arr =[1,2,3,4,5];

let len=0;

for(let i of arr){
    console.log(i)
    len++;
}
console.log("String size =",len);
}