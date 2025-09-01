
    const readline=require("readline");
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question("enter your age:",(input)=>{
        let age=parseInt(input);

       let result = age >= 18 ? "adult" : "not adult";
        console.log(result);

        rl.close();
    });

// {
//     let age = 9;
//     age >= 18 ? console.log("adult") : console.log( "child");
   
// }
