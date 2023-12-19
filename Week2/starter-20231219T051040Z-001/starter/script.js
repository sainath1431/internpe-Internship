/*
JavaScript Fundamentals Part : 1  Basic Strings

const firstName = 'sainath';
const job = 'Student';
const birthYear = 2003;
const year = 2023;

// first way to concat a strings in js
const sainath = " I'm " + firstName + ', a ' + (year - birthYear) + ' years old ' + job + '!';
console.log(sainath);

// template strings.
const sainathNew = `I'm ${firstName} , a ${year - birthYear} years old ${job} !`;
console.log(sainathNew);

console.log(`just a regular string...`);

// By using esacpe sequence \n for new line. without template string.
console.log('Starting With \n\
Multiple \n\
Lines');

// By using escape sequence \n for new line. by using template string.
console.log(`Starting With \n\
Multiple \n\
Lines`);

*/

/*
JavaScript Part -1 : Making Decisions : If/Else statement.

// If-esle  statement.(Driving Licence is applied or not Program.)

// const age = 20;
const age = 15;
const isOldEnough = (age >= 18);

if (isOldEnough) {
    console.log("Sainath Can Start Driving Licence.");
}
else {
    const yearsLeft = 18 - age;
    console.log(`Sainath is too young. wait another ${yearsLeft} years.`);
}

// calculate the century using birthYear.

const birthYear = 2012;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log("Birth Year : " + birthYear);
console.log(century);

//

*/

/*
JavaScript Fudamentals -1 : Type Conversion and coercion.




//convert string to number.

// const inputYear = '1991'; //this is a string.
// console.log(inputYear);
// console.log(inputYear + 18);//here pefrom concate operation rather than arithmetic becausd inputYear is string.
// console.log(Number(inputYear));//here perform type conversion to convert string to number by uisng Number(string name),
// console.log(inputYear + 18);//inputYear still string pefrom addition on string convert into number at that time only perform operation as follow as.
// console.log(Number(inputYear) + 18);//here inputYear is not a string it is number and add its 18.

// console.log(Number('sainath'));//here sainath is string which is not convertable into number at that time it convert into invalid number that is NaN(not a Number.)
// console.log(typeof Number('sainath')); // type is number but it is invalid number.

// // convert number to string.

// const age = 23; //this is a number
// console.log(age);//this is a number age
// console.log(String(age));//to convert number age into string by using String(number). where String() s is the captial.
// console.log(typeof String(age)); //here type is number

// // type cersion : type cersion is happens whenever the operator dealing with two values with different types.

// console.log("i am " + 23 + "years old"); //javascripts converts number into string ==> ' i am 23 years old '
//in above example string + number + string is message but whole output in the string that is done because of type cersion. change the 23 number to '23' string this conversion is called as cersion.

// console.log('23' - '10' - 3); //javascript converts strings ('23','10') into number. ==>10
// console.log('23' * '2'); //javascript converts strings into number. ===>46
// console.log('23' / '2'); //javascript converts string into number.===>11.5


// note : When type cersion is done that is when operator dealing with two values of diffent type following willl be done .

// i) if the operators (+) then number is convert into the string.
// ii) if the operatos (- , * , /) then string is convert into the number.


// //Guess the output
// let n = '1' + 1; //'11'
// n = n - 1;  //10
// console.log(n);

//5. falsy values: 0, '' , undefined ,null , NaN this five values can be convert to false when attemp to convert them to a boolean. it is not become false initially but when convert into boolean it become false. everythings else are called as truty values.

// console.log(Boolean(0));    //false
// console.log(Boolean(''));   //false
// console.log(Boolean(undefined));   //false
// console.log(Boolean(null));   //false
// console.log(Boolean(NaN));   //false
// console.log(Boolean('sainath'));  //true
// console.log(Boolean({})); //true


// In if-else there only use boolean value if there have non - boolean vaule then it convert into boolean as like above falsy value conversion.
// let money is 0 then it convert into boolean as false so the else part is executed . let money is 100 then it convert into boolean as true.



// const money = 0;
// if (money) {
//     console.log("Don't Spend it all ;");
// } else {
//     console.log("You should get a job.;");
// }

//variable actually defined or not

// in below ex height is not assgin any value so it has undefined . and undefined is falsy value so it executes the else part of the statement.

// let height;
// if (height) {
//     console.log("YAY! height is defined.");
// }
// else {
//     console.log("Height is UNDEFINED.");
// }

*/

/*

JavaScript Fundamentals -1 : Equality Operator



const age = 18;
if (age === 18) console.log("You just became an adult(strict equality operator)"); // it is strict equality operator because it is  not perform type correction. it returns true only when both values with their type will same.//true

if (age == '18') console.log("You just became an adult (loose equality operator)");//it is loose equality operator becasue it is perform type correction. it return true if both values are must be equal and datatype may or may not be equal of the values.//true.

18 === '18'//false
18 == 18 //true

// const favourite = prompt("what's your favourite number?");
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite == 23)  // '23' == 23 here first '23' is convert into 23 so that here perfoms type conversion.
// {
//     console.log("cool! 23 is a amazing number.");

// }


// const favourite = Number(prompt("what's your favourite number?")); //conversion of '23' into 23 by using Number()
// console.log(favourite);
// console.log(typeof favourite);

// if (favourite === 23) { // 23 === 23 it have same value and its value is also same.
//     console.log("cool! 23 is a amazing number.");
// }

// Note: 1)loosely equality operator perfoms type conversion at the time of evaluation of equality.Note
// 2) strictly equality operator doesn't perform ant type conversion at the time of evalution of eqality.

const favourite = Number(prompt("what's your favourite number?")); //conversion of '23' into 23 by using Number()
console.log(favourite);
console.log(typeof favourite);

if (favourite === 23) { // 23 === 23 it have same value and its value is also same.
    console.log("cool! 23 is a amazing number.");
}
else if (favourite === 7) {
    console.log("7 is also a amazing number.");
}
else if (favourite === 9) {
    console.log("9 is also a amazing number .");
}
else {
    console.log("number is not 23 or 7 or 9.");
}

if (favourite !== 23) {
    console.log("why not a 23?");
}

*/

/*
JavaScript Fundamentals part 2 : Boolean Logic

// Boolean Logic operators are
Logical AND(&&) // if both conditions are true then result will be true.
Logical OR(||)//if anyone of them is true then result will be true.
Logical NOT(!)//if their is false result is true. and if their is true result is false.
*/

// A: Sarah has driver's licence.
// B: Sararh has good vision.
// Boolean varaibles that can be either true or false.

const hasDriversLicence = true;//A
const hasGoodVision = true;//B

// console.log(hasDriversLicence && hasGoodVision);
// console.log(hasDriversLicence || hasGoodVision);
// console.log(!hasDriversLicence);

// const shouldDerive = hasDriversLicence && hasGoodVision;
// if (shouldDerive) {
//     console.log("Sarah is able to drive.");
// }
// else {
//     console.log("Someone else drive...");
// }

const isTired = false; //C
// console.log(hasDriversLicence || hasGoodVision || isTired);
// console.log(hasDriversLicence && hasGoodVision && isTired);
// console.log(!hasDriversLicence);

if (hasDriversLicence && hasGoodVision && !isTired) {
    console.log("Sarah is able to drive.");
}
else {
    console.log("Someone else drive...");
}
