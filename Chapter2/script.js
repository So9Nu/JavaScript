{
    let age = parseInt(prompt("Enter your age:"));

    if (age > 18 && age < 40) {
        console.log("Your age is greater than 18 but less than 40.");
    } else if (age >= 40 && age < 50) {
        console.log("Your age is greater than 40 but less than 50.");
    } else if (age >= 50 && age <= 100) {
        console.log("Your age is greater than 50 but less than 100.");
    } else if (age > 100) {
        console.log("You are above 100!");
    } else if (age > 18) {
        console.log("Your age is greater than 18.");
    } else {
        console.log("You are a child.");
    }
}