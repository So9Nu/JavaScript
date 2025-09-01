/*
write a code which can give grade to student according to their scores
80-100,A
70-90,B
60-70,C
50-60,D
0-50,F
*/

const readline=require("readline");
const rl=readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

rl.question("Enter Your Score:",(input)=>{
    let grade=parseInt(input);

    if (grade>=80 && grade<100) {
        console.log("Your grade is A.")
    } 
    else if(grade>=70 && grade<90){
        console.log("Your grade is B")
    }
    else if(grade>=60 && grade<80){
        console.log("Your grade is c")
    }
    else if(grade>=50 && grade<70){
        console.log("Your grade is D")
    } 
    else if(grade>=40&& grade<60){
        console.log("Your grade is E")
    }
    else{
        console.log("you failed!")
    }
    console.log("according to your score,your grade was:",grade);
    rl.close();
});