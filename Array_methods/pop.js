//pop to delete the any items .
let items=["apple","mango","Litchi","orange","potato","chips","momo","chowmien"];
console.log(items);
items.pop();

console.log("after the delete items.",items.pop(),"\n");
for(let i=0;i<items.length;i++){
    console.log(i,":",items[i]);
}