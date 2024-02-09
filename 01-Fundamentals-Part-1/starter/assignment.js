// let country = 'Philippines';
// let continent = 'Asia';
// let population = 113900000;
// let isIsland = true;
// let language = 'tagalog';
// let Finland = 6000000;
// let averageCountry = 33000000;
// let description =
//   'Portugal is in Europe, and its 11 million people speak portiguese';

// description = `${country} is in ${continent}, and its ${population} people speak portuguese`;

// let x, y;
// x = y = 25 - 10 - 5;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(isIsland);
// console.log(language);
// console.log('the half of the population in the country would be 56950000');
// console.log(population + 1);
// console.log(Finland > population);
// console.log(averageCountry > country);
// console.log(description);
// console.log(x, y);

// //////CODE CHALLENGE
// /*Code Challenge 1*/

// //Test Data1
// let markHeight = 1.69;
// let johnHeight = 1.95;

// let markWeight = 78;
// let johnWeight = 92;

// let markBMI = markWeight / markHeight ** 2;
// let johnBMI = johnWeight / johnHeight ** 2;
// let markHigherBMI = markBMI > johnBMI;

// console.log(markBMI.toFixed(2));
// console.log(johnBMI.toFixed(2));
// console.log(`mark's BMI is higher than john's BMI: ${markHigherBMI}`);

// //Test Data 2
// markWeight = 95;
// markHeight = 1.88;

// johnHeight = 1.76;
// johnWeight = 85;

// markBMI = markWeight / markHeight ** 2;
// johnBMI = johnWeight / johnHeight ** 2;

// markHigherBMI = markBMI > johnBMI;

// console.log(markHigherBMI);
// console.log(`Mark's BMI is higher than john's BMI: ${markHigherBMI}`);

// //insert multiple lines string
// console.log(`multiple \n line \n now`);

// /////////////////////
// //code Challenge 2
// if (markBMI > johnBMI) {
//   console.log(`Mark's BMI(${markBMI}) is higher than John's (${johnBMI}!`);
// } else {
//   console.log(
//     `John's BMI(${johnBMI.toFixed(1)}) is higher than Mark's (${markBMI.toFixed(
//       1
//     )})`
//   );
// }

// //////////////////////
// //Coding Challenge 3

// ////Data 1
// let dolphinAvgScore = 96 + 108 + 89 / 3;
// let koalasAvgScore = 88 + 91 + 110 / 3;

// if (dolphinAvgScore > koalasAvgScore) {
//   console.log(
//     `Dolphin won the trophy with an average of ${dolphinAvgScore.toFixed(2)}`
//   );
// } else if (koalasAvgScore > dolphinAvgScore) {
//   console.log(`Koala won the trophy with an average of ${koalasAvgScore}`);
// } else if (koalasAvgScore === dolphinAvgScore) {
//   console.log(`Koala and Dolphin are tie with an average of ${koalasAvgScore}`);
// }

// //bonus 1
// dolphinAvgScore = 97 + 112 + 101 / 3;
// // koalasAvgScore = 109 + 95 + 123 / 3;
// koalasAvgScore = 97 + 112 + 101 / 3;

// if (dolphinAvgScore > koalasAvgScore && dolphinAvgScore >= 100) {
//   console.log(`Dolphin wins with an average score of ${dolphinAvgScore}`);
// } else if (koalasAvgScore > dolphinAvgScore && koalasAvgScore >= 100) {
//   console.log(`Koala wins with an average score of ${koalasAvgScore}`);
// } else if (
//   koalasAvgScore == dolphinAvgScore &&
//   koalasAvgScore >= 100 &&
//   dolphinAvgScore >= 100
// ) {
//   console.log(
//     `It's a draw with both teams having a score of ${koalasAvgScore.toFixed(2)}`
//   );
// } else {
//   console.log('no one won');
// }

// const age = 17;
// const isOldEnough = age >= 18;

// if (isOldEnough) {
//   console.log('You are in your legal age! Congrats!');
// }

// const inputYear = '1991';

// console.log(inputYear + 18);
// console.log(Number(inputYear));
// console.log(Number(inputYear) + 18);

/*LECTURE: Taking Decisions: if / else Statements
1. If your country's population is greater that 33 million, log a string like this to the 
console: 'Portugal's population is above average'. Otherwise, log a string like 
'Portugal's population is 22 million below average' (the 22 is the average of 33 
minus the country's population)

2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/

// let countryPopulation;
// if (countryPopulation > 33) {
//   console.log(`Portugal's population is above average`);
// } else {
//   console.log(`Portugal's population is 22 million below average`);
// }

// countryPopulation = 13;
// if (countryPopulation < 33) {
//   console.log('test');
// } else if (countryPopulation > 33) {
//   countryPopulation = 130;
//   console.log(`Portugal's population is above average`);
// }

/*
LECTURE: Type Conversion and Coercion
1. Predict the result of these 5 operations without executing them:
'9' - '5'; = 4
'19' - '13' + '17'; = 617
'19' - '13' + 17; = 23
'123' < 57;  false
5 + 6 + '4' + 9 - 4 - 2;  144
2. Execute the operations to check if you were right
*/

// console.log('9' - '5');
// console.log('19' - '13' + '17');
// console.log('19' - '13' + 17);
// console.log('123' < 57);
// console.log(5 + 6 + '4' + 9 - 4 - 2);

//LECTURE: Equality Operators: == vs. ===
// let numNeighbours = Number(
//   prompt(`How many neighbour countries does your country
// have?`)
// );

// if (numNeighbours == 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// if (numNeighbours === 1) {
//   console.log('Only 1 border!');
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border');
// } else {
//   console.log('No borders');
// }

// === use to check if the data type is equal
////////////////////////////////////
///////////////////////
//LECTURE: Logical Operators
// let speaksEnglish = true;
// let population = 40;
// let isIsland = false;

// const sarahCriteria = speaksEnglish && population < 50 && !isIsland;
// if (sarahCriteria) {
//   console.log('You should live in Portugal :)');
// } else {
//   console.log('Portugal does not meet your criteria :(');
// }

// let language = 'hindi';
// switch (language) {
//   case 'chinese':
//   case 'mandarin':
//     console.log('MOST number of native speakers!');
//     break;

//   case 'spanish':
//     console.log('2nd place in number of native speakers');
//     break;
//   case 'english':
//     console.log('3rd place');
//     break;
//   case 'hindi':
//     console.log('5th most spoken language');
//     break;

//   default:
//     console.log('Great language too :D');
//     break;
// }

//LECTURE: The Conditional (Ternary) Operator
/*
1 . If your country's population is greater than 33 million, use the ternary operator 
to log a string like this to the console: 'Portugal's population is above average'. 
Otherwise, simply log 'Portugal's population is below average'. Notice how only
one word changes between these two sentences!
2. After checking the result, change the population temporarily to 13 and then to 
130. See the different results, and set the population back to original
*/

// let myCountryPopulation = 13;

// if (myCountryPopulation > 33) {
//   console.log(`Portugal's population is above average`);
// } else {
//   console.log(`Portugal's population is below average`);
// }

// const hasDriversLicense = false;
// const hasGoodVision = true;

// console.log(hasDriversLicense || hasGoodVision);



// dolphinsScore = (96 + 108 + 89) /3;
// // koalasScore= 88 + 91+ 110 / 3;
// koalasScore= 916 + 108 + 89 /3;



// console.log(dolphinsScore.toFixed(2));
// console.log(koalasScore.toFixed(2));

// if (dolphinsScore > koalasScore) {
//     console.log(`Dolphin won with an average of ${dolphinsScore.toFixed(2)}`);
// }
// else if(dolphinsScore === koalasScore) {
//     console.log('The score is draw!');
// }
// else{
//     console.log(`Koala won with an average of ${koalasScore.toFixed(2)}`);
// }

// const day = prompt()


// if (day === "monday") {
//     console.log('Today is monday');
//     console.log('Go to your coding meetup!')
// } 
// else if(day === "tuesday") {
//     console.log('Today is Tuesday')
// } 
// else if( day === "wednesday" ||  day === "thursday"){
//     console.log('Write code examples');
// } else if (day === "friday"){
//     console.log('Today is friday');
// } else if (day=== "saturday" || day === "sunday"){
//     console.log("It's weekend");
// }
// else{
//     console.log('Invalid input');
// }
    

// const age = 18

// const drink= age >= 18 ? 'allowed to drink' : 'you are underage';
//  console.log(drink);

/////TERTIARY OPERATOR IN CONDITION
////ata 1

const bill = 40;

// const tip = bill >=50 && bill <=300 ? 
// `The bill was ${bill}, the tip was ${bill * .15}, and the total value ${bill + bill * .15}` :
// `The bill was ${bill}, the tip was ${bill * .20}, and the total value ${bill + bill * .2}`;
// console.log( tip);

const tip = bill >= 50 && bill <= 300 ? bill * .15 : bill * .2;


console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${tip + bill}`);