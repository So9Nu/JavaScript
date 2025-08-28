//automatically declare the variable.
// a=20;
// add='jwl';


// hoisting 
/* 
console.log("var c = ",c);
var c = 15;
the result will be undefined.
*/

/*
console.log("let d=",d);
let d = 15;
The result will be cannot access 'd' before initialization.
*/

function testScope(){
    if(true){
        var x = 10;
        let y = 20;
        console.log("inside block : x =",x,",y=",y);
    }

    console.log("Outside block : x =",x);//works
    console.log("Outside block : y =",y); //error: because the y is undefinde.

}
testScope();