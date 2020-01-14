// ES5
/* var name5 = "Jane Smith"
var age = 23;
name5 = "Jane Jones";
console.log(name5 + " is " + age + " years old");

//ES6
const name6 = "Chris Brown";
let age1 = 42;
name6 = "Chris Gorst"
console.log(name6 + " is " + age1 + " years old") */

// ES5 -function scoped - can be used as long as it is within the function
// function driversLicense5(passtest) {
//   if (passtest) {
//     var firstName = "Claire";
//     var yearOfBirth = 1983;
//   }
//   console.log(
//     firstName + " was born in " + yearOfBirth + " and can legally drive a car"
//   );
// }
// driversLicense5(true);

// ES6 - block scoped - can only be used within  the {} of the block
// function driversLicense6(passtest) {
//   if (passtest) {
//     let firstName = "Chris";
//     const yearOfBirth = 1977;
//     console.log(firstName + " was born in " + yearOfBirth + " and can legally drive a car");
//   }
// }
// driversLicense6(true);

// Strings
/*let firstName= 'Chris';
let lastName = 'Brown'
let n = `${firstName} ${lastName}`;
const yearofBirth = 1977;

function calcAge(year){
    return 2019 - year;
}

// ES5
console.log("ES5 - This is " + firstName + " " + lastName + " and he is " + calcAge(yearofBirth) +" years old")

// ES6
console.log(`ES6 - This is ${n} and he is ${calcAge(yearofBirth)} years old.`);

console.log(`starts with: `, n.startsWith("C"));
console.log(`starts with: `, n.startsWith("c"));
console.log(`ends with: `, n.endsWith("n"));
console.log(`contains: `, n.includes("Br"));
console.log(`repeats:`, `${n}     `.repeat(15));
console.log(`${n} is ${n.length} characters.`);
console.log(`${n.toUpperCase()}`);

function characterCount(s){
    console.log(`${s} : ${s.length} characters.`);
}

characterCount("This is a string. This is a string. This is a string. This is a string");*/

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrow functions

// const years = [1990, 1987, 1972,1950]
// const year = new Date().getFullYear();

// // ES5
// var ages5 = years.map(function(el){
//     return 2019 - el;
// });
// console.log(ages5);

// // ES6
// const age6 = years.map(el => year-el);
// console.log(age6);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Arrow Functions 2

// ES5
// var box5 = {
//   color: "green",
//   position: 1,
//   clickMe: function() {
//     var self = this;
//     document.querySelector(".green").addEventListener("click", function() {
//       var string = "This is box number " + self.position + " and it is " + self.color;
//       alert(string);
//     });
//   },
// };

// box5.clickMe();

// ES 6
// const box6 = {
//     color: "green",
//     position: 1,
//     clickMe: function() {
//       document.querySelector(".green").addEventListener("click", () => {
//         var string = "ES6 - This is box number " + this.position + " and it is " + this.color;
//         alert(string);
//       });
//     },
//   };

//   box6.clickMe();

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// Destructuring

const [name, surname, age, address1, address2, city] = [
  "Chris",
  "Brown",
  42,
  "94 Castlegrange Park",
  "Strabane",
  "Northern Ireland",
];

// console.log(
//   `This guy is callled ${name} ${surname} - aged ${age} - and he lives at ${address1}, ${address2}, ${city}`
// );

const obj = {
  firstName6: "Claire",
  lastName6: "Brown",
  age6: 34,
  address6: "440, Liverpool Street",
  city6: "Salford",
};

const { firstName6, lastName6, age6, address6, city6 } = obj;

// console.log(
//   `This lady is callled ${firstName6} ${lastName6} - aged ${age6} - and she lives at ${address6}, ${city6}`
// );

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*function calcRetirementDetails(
  name,
  yearofBirth,
  annualContributions,
  currentPensionvalue
) {
  const currentYear = new Date().getFullYear();
  const retirementAge = 65;
  let currentAge = currentYear - yearofBirth;
  let yearsToRetirement = retirementAge - currentAge;
  return [
    name,
    currentYear,
    currentAge,
    yearsToRetirement,
    annualContributions,
    currentPensionvalue,
  ];
}

document.querySelector(".submit").addEventListener("click", function() {
  let name = document.querySelector(".name").value;
  let yearOfBirth = document.querySelector(".yearOfBirth").value;
  let currentPensionvalue = document.querySelector(".currentPensionvalue").value;
  let annualContributions = document.querySelector(".annualContributions").value;

  const [
    name1,
    currentYear1,
    currentAge1,
    yearsToRetirement1,
    annualContributions1,
    currentPensionvalue1,
  ] = calcRetirementDetails(
    name,
    yearOfBirth,
    annualContributions,
    currentPensionvalue
  );

  let string1 = `${name1} is ${currentAge1} and will retire in ${yearsToRetirement1} years in ${currentYear1 +
    yearsToRetirement1} with a pension pot of £${annualContributions1 *
    yearsToRetirement1} plus a pot of £${currentPensionvalue1}`;

  document.querySelector(".string").textContent = string1.toUpperCase();
});

*/

////////////////////////////////////////////////////////////////////////////////////////////////

function calcTotal (a,b,c,d){
  return a+b+c+d;
}

var ages = [12, 20, 34, 26]
var total = calcTotal.apply(null, ages);
console.log(`ES5 - The total of all values in the array is ${total}`);

const total2 = calcTotal(...ages);
console.log(`ES6 - The total of all values in the array is ${total2}`);

const browns = ['Chris', 'Claire', 'Erin', 'Cara'];
const gorsts = ['Steven', 'Debbie','Steven', 'Lilly', 'Sonny']
const bigFamily = [...browns, ...gorsts];
console.log(bigFamily);

////////////////////////////////////////////////////////////////////////////////////////////////


