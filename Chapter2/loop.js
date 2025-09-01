// {
//     const readline=require("readline");
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout
// });

// rl.question("Enter a number:",(input)=>{
//     let n=parseInt(input);
    
//     for(let i=1;i<=n;i++){
       
//         for(let j=i;j<=10;j++){
//             console.log(i,"x",j,"=",i*j,"\n");
//         }
        
//     }

//     rl.close();

// });
// }

{
const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("enter a number:",(input)=>{
    let number=parseInt(input);


if (number>=18 && number<30) {
    console.log("Sonu");
    
}else if(number>=30){
    console.log("Aarti");
}else{
    console.log("error");
}

    rl.close();
}
);}