// // some more array methods 
// reduce 
// performs some operations & reduces the array to Single
// value.it returns that single value

// add with reduce.
{

    let arr=[1,2,3,4];
    
    let sum=arr.reduce((previous,current)=>{
        return previous*current;
    });
    console.log(sum);
}
// output=24

{
     let arr=[1,2,3,4];
    
    let sum=arr.reduce((previous,current)=>{
        return previous+current;
    });
    console.log(sum);
}
// output=10


let arr = ["sonu","kumar","jaiswal"];

let minString = arr.reduce((previous, current) => {
    return previous > current ? previous : current;
});

console.log(minString); // jaiswal
