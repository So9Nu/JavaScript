// toString():converts array to string.
// let items=["apple","mango","Litchi","orange","potato","chips","momo","chowmien"];
// console.log(items.toString());
// items.pop();

// console.log("after the delete items.",items.pop(),"\n");
// for(let i=0;i<items.length;i++){
//     console.log(i,":",items[i].toString());
// }
let items=["apple","mango","litechi","orange"];
items.push("chips","momo","chowmien");
console.log("\n");
// Correct loop
for(let j=0; j<items.length; j++){
    console.log(j,":",items[j].toString());
}
console.log("\n");

items.pop();  // removes "chowmien"

// Correct loop
for(let k=0; k<items.length; k++){
    console.log(k,":",items[k].toString());
  
}
console.log("\n");

// Loop with index
// for(let i=0; i<items.length; i++){
//     console.log(i, ":", items[i].toString());
// }
