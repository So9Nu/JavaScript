/***
 we are given arrya of marks of students . filter our of the marks of students that scored 90+.
 */
let marks=[11,22,33,44,55,66,77,88,99,97,96,95,94];

let newMarks=marks.filter((val)=>{
   
    return val>90;
});
console.log(newMarks);
