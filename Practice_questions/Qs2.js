/*
Qs.take a number n as input from the user . create an array of number from 1 to n.
use the reduce method to calculate sum of all number in the array.
use the reduce method to calculate product of all number in the array.
 */
let num=prompt("enter a number:");
let arr=[];
for(let i=1;i<=num;i++){
    arr[i-1]=i;
}
console.log(arr);

let sum=arr.reduce((pre,curr)=>{
    return pre+curr;
});
console.log("sum=",sum);

let factorial=arr.reduce((pre,curr)=>{
    return pre*curr;
});
console.log("Factorial=",factorial);

// calculate the product.
