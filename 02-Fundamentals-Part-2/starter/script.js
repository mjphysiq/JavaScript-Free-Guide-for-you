// 'use strict'; 

// let hasDriverLicense = false;
// const passTest = true;

// if (passTest) hasDriverLicense = true;
// if (hasDriverLicense) {
//     console.log('I can drive :D');
// } 

// function logger(){
//     console.log('My name is Michael 😃');
// }

// logger();


// function fruitProcessor(apple, oranges){
//     console.log(apple, oranges);
//     const juice= `Juice with apple cost ${apple} and the juice with oranges cost ${oranges}`;
//     return juice;
// }
  
// const appleJuice = fruitProcessor(50, 60);
// console.log(appleJuice);

// function describeCountry(country, population, capitalCity){
//     let countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}`;
//     return countryDescription;
// }

// const philippines= describeCountry('Philippines', 20, 'Manila');
// console.log(philippines);


// function calcAge1 (birthyear){
//     const age= 2024 - birthyear;
//     return age;
// }

// const myBirthYearcalcAge1= calcAge1(2000);

// const calcAge2 = function(birthyear){
//     const age= 2024 - birthyear;
//     return age;
// }

// const age2 = calcAge2(2000);
// console.log(myBirthYearcalcAge1, age2 );

// const chinaPopulation = 1441;
// const philippinesPopulation = 100
// const japanPopulation = 80
// const worldPopulation = 7900;


// function percentageOfWorld1 (population){
//     const worldPopulation = 7900;
//     let populationPercentage = (population / worldPopulation) *100; 
//     return populationPercentage;
// }

// let chinaPopulationPercentage = percentageOfWorld1 (chinaPopulation);
// let philippinesPopulationPercentage = percentageOfWorld1 (philippinesPopulation);
// let japanPopulationPercentage = percentageOfWorld1 (japanPopulation);


// console.log(`China has ${chinaPopulation} million people, so it's about ${chinaPopulationPercentage.toFixed(1)} of the world population`);
// ////
// console.log(`Philippines has ${philippinesPopulation} million people, so it's about ${philippinesPopulationPercentage.toFixed(1)} of the world population`);
// ///
// console.log(`Japan has ${japanPopulation} million people, so it's about ${japanPopulationPercentage.toFixed(1)} of the world population`);


// //Function Expression
// const percentageOfWorld2 = function (population ) {
//     let populationPercentage = (population / worldPopulation) * 100;
//     return populationPercentage;
// }

//  chinaPopulationPercentage = percentageOfWorld2 (chinaPopulation);
//  philippinesPopulationPercentage = percentageOfWorld2 (philippinesPopulation);
//  japanPopulationPercentage = percentageOfWorld2 (japanPopulation);

//  console.log(`China has ${chinaPopulation} million people, so it's about ${chinaPopulationPercentage.toFixed(1)} of the world population`);
//  ////
//  console.log(`Philippines has ${philippinesPopulation} million people, so it's about ${philippinesPopulationPercentage.toFixed(1)} of the world population`);
//  ///
//  console.log(`Japan has ${japanPopulation} million people, so it's about ${japanPopulationPercentage.toFixed(1)} of the world population`);


// Arrow Function
// const percentageOfWorld3 = population => {
//     let populationPercentage = (population / worldPopulation) * 100;
//     return populationPercentage;
// }

// chinaPopulationPercentage = percentageOfWorld3 (chinaPopulation);
 
// console.log(`China has ${chinaPopulation} million people, so it's about ${chinaPopulationPercentage.toFixed(1)} of the world population`);





//Arrow Function
// const calcAge3 = birthyear => 2024 - birthyear;
// const age3 = calcAge3(2000);
// console.log(age3);

// const yearsUntilRetiremet = (birthyear, name) => {
//     const age = 2024 - birthyear;
//     const retirement = 65 - age;
//     return (`${name} will retire after ${retirement}`);
// }

// const retirementAge = yearsUntilRetiremet(2000,"Michael");
// console.log(retirementAge); 


