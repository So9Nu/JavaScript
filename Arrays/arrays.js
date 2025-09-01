// const readline=require("readline");
// const rl=readline.createInterface({
//     input:process.stdin,
//     output:process.stdout,
// });
// rl.question("enter your marks:",(input)=>{
    
//     let marks=parseInt[97,67,56,88,90];

//     if(marks){

//     }

//     rl.close();
// });


{


    let arr=[23,33,44,55,66,77,88,99,0];
    arr[5]=12;
    console.log(arr);
    console.log("\n")
}


{

    let str="sonuKumarjaiswal";
    console.log(str);
    console.log("\n")
}







{
    let heros = ["sonu", "ram", "shyam", "hari", "geeta", "Tanu", "aarti"];

for (let i = 0; i < heros.length; i++) {
    console.log(heros[i].toUpperCase());
}
console.log("\n")
}


let heros = ["sonu", "ram", "shyam", "hari", "geeta", "Tanu", "aarti"];
let str=0;
for(let hero=65; hero<95;hero++){
  
   str+=hero;
}
let avg=str/heros.length;
console.log(avg);
 console.log("\n")




// let fullName=prompt("enter your full name:");
 
// let cleanName=fullName.replace(/\s+/g,"");

// let userName="@"+cleanName+fullName.length;

// console.log("you entered your fullname and i will replace the name in gmail ",userName);