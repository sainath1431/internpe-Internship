/*
# Coding Challenge : 1

Mark and John are trying to compare their BMI(Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height). (mass in kg and height in meter).

1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

TEST DATA 1: Marks weights 78 kg and is 1.69 m tall.John weights 92 kg and is 1.95 m tall.
TEST DATA 2: Marks weights 95 kg and is 1.88 m tall.John weights 85 kg and is 1.76 m tall.

GOOD LUCK 😀 */

// TEST DATA 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

/*
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;
console.log("Mark Mass (Kg) = " + markMass);
console.log("Mark Height (M.) = " + markHeight);
console.log("John Height (M.) = " + johnHeight);
console.log("John Mass (Kg) = " + johnMass);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));
console.log("markHigherBMI : " + markHigherBMI);

*/

/*let markHigherBMI;
if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("\nmark has a higher BMI than john.");
} else {
    markHigherBMI = false;
    console.log("john has a higher BMI than mark.");
}
*/

// TEST DATA 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

/*
const markMass = 95;
const markHeight = 1.88;
const johnMass = 85;
const johnHeight = 1.76;
console.log("Mark Mass (Kg) : " + markMass);
console.log("Mark Height (M.) : " + markHeight);
console.log("John Height (M.) : " + johnHeight);
console.log("John Mass (Kg) : " + johnMass);

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

let markHigherBMI = markBMI > johnBMI;

console.log("\nMark BMI : " + markBMI.toFixed(2));
console.log("John BMI : " + johnBMI.toFixed(2));
console.log("markHigherBMI : " + markHigherBMI);

*/

/*let markHigherBMI;
if (markBMI > johnBMI) {
    markHigherBMI = true;
    console.log("\nmark has a higher BMI than john.");
} else {
    markHigherBMI = false;
    console.log("\njohn has a higher BMI than mark.");
}
*/


