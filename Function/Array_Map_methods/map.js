/**
 some more array methods.
 map
 create a new array with the result of some operations.
 the value its callback returns are used to form new array.

 arr.map(callbackfunc(value,idx,arr))

 syntax.

 let newArr=arr.map((val)=>{
    return val*2
    })
 */

    let nums=[1,2,4,5];

    let Newarr=nums.map((val)=>{
        return val**4;
    })
    console.log(Newarr.length,Newarr);
 
    
       {
    const person={
        first:"jhon",
        last:"doe",
        fullName:function(){
            const capFirst = this.first.charAt(0).toUpperCase()+this.first.slice(1);
            const capLast = this.last.charAt(0).toUpperCase()+this.last.slice(1);
            return capFirst + " " + capLast;
        }

    }
    console.log(person.fullName());
}