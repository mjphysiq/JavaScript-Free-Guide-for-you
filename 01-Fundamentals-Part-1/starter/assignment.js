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

let countryPopulation;
if (countryPopulation > 33) {
  console.log(`Portugal's population is above average`);
} else {
  console.log(`Portugal's population is 22 million below average`);
}

countryPopulation = 13;
if (countryPopulation < 33) {
  console.log('test');
} else if (countryPopulation > 33) {
  countryPopulation = 130;
  console.log(`Portugal's population is above average`);
}
