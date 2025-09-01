let str="";
for (let i = 65; i <= 90; i++){
str+=String.fromCharCode(i);
}
let output=`${str[8]} ${str[11]} ${str[14]} ${str[21]} ${str[4]} ${str[20]}`;
console.log(output);
// console.log(str[8],str[11],str[14],str[21],str[4],str[20]);

{let str="Tanu";
 console.log(str);//5
}

 {
    let str = "Sonu Kumar jaiswal"
    let s =`The Upper Case is ${str.toUpperCase()} \n This is length ${str.length} \n This is lower case ${str.toLowerCase()}`;
    console.log(s);
 }