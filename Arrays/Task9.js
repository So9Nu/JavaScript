/*
for a given array with price of 5 items->[250,645,300,900,50]
all items have an offer of 10% off on them . change the array to store 
final price of applying offer.
 */

let items=[250,645,300,900,50];
let sum=0;

for(let i=0;i<items.length;i++){
    let offer=items[i]*10/100;
    let finalPrice=items[i]-offer;
    sum+=finalPrice;
    console.log("The value after offer=",finalPrice);
}

console.log(`The total discout of each items of 10% and the total final price of each items is ${sum}`);