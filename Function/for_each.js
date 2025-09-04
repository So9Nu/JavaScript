// ForEach Loop in Arrays.
/**
 * arr.foreach(callbackfunction)
 * callbackfunction:here,it is a function to execute for each element in the array.
 * a callback is a function passed as an argument to another function.
 * 
 * syntax
 * arr.forEach((val)=>{
 * console.log(val);
 * }) 
 */{

     let arr=["sonu","rahul"];
     
     arr.forEach((val)=>{
         let sonu=val.charAt(0).toUpperCase()+val.slice(1);
         console.log(sonu);
        })
    }

    {
        let arr=["gadhiMai","kalaiya","birgunj","chitwan","aarti"];
        arr.forEach((val,idx,arr)=>{
            let capital=val.charAt(0).toUpperCase()+val.slice(1);
            console.log(idx,capital,arr);
        })
    }