function functionSum(a=10,b=20){
    console.log(a+b);
}
functionSum();

function Sum(a,b)
{
    console.log(a*b);
}
 Sum(2,3);

 {
    function sum(x,y){
        s=x+y;
        console.log("before return");
        return s;
    }
    let val=sum(3,4);
    console.log(val);
    console.log("after return");
 }