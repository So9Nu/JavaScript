// some more array methods.
// filter
// creates a new array of element that gives 
// true for a conditon / filter .

let arr=[1,2,3,4];

let newArr= arr.filter((val)=>{
 return val < 3;
});
console.log(newArr);