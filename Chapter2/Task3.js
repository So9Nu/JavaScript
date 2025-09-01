/*
get user to input a number using prompt
 ("enter a number ") . check if the number 
 is a multiple of 5 or not.
*/
 const readline=require("readline");
    const rl=readline.createInterface({
        input:process.stdin,
        output:process.stdout
    });

    rl.question("enter your age:",(input)=>{
        let number=parseInt(input);

      if (number%5===0) {
        console.log("yes it is")
      } else{
        console.log("not")
      }

        rl.close();
    });