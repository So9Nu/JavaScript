/**
 create an array to store companies->"Bloomberg","microsoft","ulber","google","ibm","Netflix".
 a).remove the first company from the array.
 b).remove ulber & add ola in its place.
 c).add amazon at the end.
 */

 let companies=["Bloomberg","microsoft","ulber","google","ibm","Netflix"];
companies.shift();

console.log("Remove the ",companies);
console.log("Remove Uber and add",companies.splice(1,1,"Ola"));
companies.push("Amazon");
console.log("In the last we add",companies);
// console.log(`we remove the first company ${company} from the array the we also remove (Ulber) and add the ${companies.splice(1,1,"Ola")} the we also add  ${companies.push("Amazon")} in the last of end.`)


 
