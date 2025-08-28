// create a const object called "product" to store information in the picture.
// let name="parker Jotter Standard CT Ball Pen (Black)";
// let rating=4;
// let isOffer=true;
// let price=285;
// let discount=5;

// console.log(name);
// console.log("The rating of CT Ball pen " + rating);
const pen = {
    name: "parker Jotter Standard CT Ball Pen (Black)",
    rating: 4,
    isOffer: true,
    price: 270,
    discount: 5
};
//     if (isOffer) {
//    discount=price*discount/100;
//     console.log("The deal is availabe" + " with discount Rs."+ discount + " on Rs." +price)
// }else{
// console.log("The deal of the day is over ");

// }

for (let key in pen){
    console.log(key,":",pen[key]);

}



