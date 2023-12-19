// Coding Challenge #2

/*
Use the BMI example from Challenge #1, and the code you already wrote, and improve it:

1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

HINT: Use an if/else statement 😉

GOOD LUCK 😀
*/

// TEST 1: 1. Print a nice output to the console, saying who has the higher BMI. The message can be either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"

//Solution :
/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

// console.log("Mark Mass (Kg) = " + markMass);
// console.log("Mark Height (M.) = " + markHeight);
// console.log("John Height (M.) = " + johnHeight);

const markBMI = (markMass / markHeight ** 2);
const johnBMI = (johnMass / johnHeight ** 2);
console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));

if (markBMI > johnBMI) {
    console.log("Mark's BMI is higher than John's!");
} else {
    console.log("John's BMI is higher than Mark's!");
}
*/


// 2. Use a template literal to include the BMI values in the outputs. Example: "Mark's BMI (28.3) is higher than John's (23.9)!"

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = (markMass / markHeight ** 2).toFixed(2);
const johnBMI = (johnMass / johnHeight ** 2).toFixed(2);
console.log("\nMark BMI : " + markBMI);
console.log("John BMI : " + johnBMI);


if (markBMI > johnBMI) {
    console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
} else {
    console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
}
*/

