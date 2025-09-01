/*
for a given array with marks of students ->[85,97,44,37,76,60]
find the average marks of the enitre class.
 */

let marks=[85,97,44,37,76,60];
let sum=0;
// for(let i=0;i<marks.length;i++){
//     sum+=marks[i];
// }
for(let i of marks){
    sum+=i;
}
let average = sum/marks.length;
console.log("Average:",average);
