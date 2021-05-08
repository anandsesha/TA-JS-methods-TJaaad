let persons = [
  { name: 'John', grade: 8, sex: 'M' },
  { name: 'Sarah', grade: 12, sex: 'F' },
  { name: 'Bob', grade: 16, sex: 'M' },
  { name: 'Johnny', grade: 2, sex: 'M' },
  { name: 'Ethan', grade: 4, sex: 'M' },
  { name: 'Paula', grade: 18, sex: 'F' },
  { name: 'Donald', grade: 5, sex: 'M' },
  { name: 'Jennifer', grade: 13, sex: 'F' },
  { name: 'Courtney', grade: 15, sex: 'F' },
  { name: 'Jane', grade: 9, sex: 'F' },
  { name: 'John', grade: 17, sex: 'M' },
  { name: 'Arya', grade: 14, sex: 'F' },
];

// NOTE: Use reduce method whereever you can to solve this exercise:

// Find the average grade

let personGradesArray = persons.map((person) => person.grade)
let personGradesTotal = personGradesArray.reduce((acc,cv) => {return acc + cv},0) 
let averageGrade = personGradesTotal / personGradesArray.length;
console.log(averageGrade)

// let totalGrade = persons.reduce((acc,cv) => acc+cv.grade,0)
// console.log(totalGrade/persons.length)

// Find the average grade of male

let males = persons.filter((person) => person.sex == 'M')
let maleGrades = males.map((person) => person.grade)
let maleGradesTotal = maleGrades.reduce((acc,cv) => acc+cv,0)
let averageMaleGrade = maleGradesTotal / maleGrades.length;
console.log(averageMaleGrade)

// let malesAvgGrade = persons.filter((person) => person.sex == 'M')
// .reduce((acc,cv) =>{
//   return acc + cv.grade
// },0)/persons.length;

// Find the average grade of female

let females = persons.filter((person) => person.sex == 'F')
let femaleGrades = females.map((person) => person.grade)
let femaleGradesTotal = femaleGrades.reduce((acc,cv) => acc+cv,0)
console.log(femaleGradesTotal / femaleGrades.length)

// Find the highest grade

let highestGrade = [...personGradesArray].sort((a,b) => a-b).pop()

// Find the highest grade in male

let highestmaleGrade = [...maleGrades].sort((a,b) => a-b).pop()

// Find the highest grade in female

let highestFemaleGrade = [...femaleGrades].sort((a,b) => a-b).pop()

// Find the highest grade for people whose name starts with 'J' or 'P'

let nameStartJP = persons.filter((person) => person.name.startsWith('J') || person.name.startsWith('P'))
let personGradesArrayJOrP =  nameStartJP.map((person) => person.grade)
let highestGradeJOrP =  [...personGradesArrayJOrP].sort((a,b) => a-b).pop()
console.log(highestGradeJOrP)

const fruitBasket = [
  'banana',
  'cherry',
  'orange',
  'apple',
  'cherry',
  'orange',
  'apple',
  'banana',
  'cherry',
  'orange',
  'fig',
];

/* 

Use the fruitBasket array to create an object where key will be the fruit and value will be the number of times
that fruit has appeared in the array. Store it in new variable fruitsObj

Output: 
{banana: 2, cherry: 3, orange: 3, apple: 2, fig: 1}
*/

// let fruitsObj = {banana: 0, cherry: 0, orange: 0, apple: 0, fig: 0}
// fruitBasket.forEach((fruit) => {
//   if(fruit == 'banana'){
//     fruitsObj.banana = fruitsObj.banana + 1;
//   }else if(fruit == 'cherry'){
//     fruitsObj.cherry = fruitsObj.cherry + 1;
//   }
//   else if(fruit == 'orange'){
//     fruitsObj.orange = fruitsObj.orange + 1;
//   }
//   else if(fruit == 'apple'){
//     fruitsObj.apple = fruitsObj.apple + 1;
//   }
//   else if(fruit == 'fig'){
//     fruitsObj.fig = fruitsObj.fig + 1;
//   }
// })

// console.log(fruitsObj)

let fruitsObj = fruitBasket.reduce((acc,cv) =>{
  if(acc[cv]){
    acc[cv] = acc[cv] + 1;
  }else{
    acc[cv] = 1;
  }
  return acc;
},{})

console.log(fruitsObj);

/* 

Use the fruitBasket array to create an array of array. Each array will contain two values name of fruit and number of times
that fruit appeared. Use the variable defined above (fruitsObj). To get all the keys of an array you can use Object.keys()

Output: 

[['banana', 2], ['cherry', 3], ['orange', 3], ['apple', 2], ['fig', 1]]
*/

// let fruitsObj = [['banana', 0], ['cherry', 0], ['orange', 0], ['apple', 0], ['fig', 0]]
// fruitBasket.forEach((fruit) => {
//   if(fruit == 'banana'){
//     fruitsObj[0][1] += 1;
//   }else if(fruit == 'cherry'){
//     fruitsObj[1][1] += 1;
//   }
//   else if(fruit == 'orange'){
//     fruitsObj[2][1] += 1;
//   }
//   else if(fruit == 'apple'){
//     fruitsObj[3][1] += 1;
//   }
//   else if(fruit == 'fig'){
//     fruitsObj[4][1] += 1;
//   }
// })
// console.log(fruitsObj)

let fruitsArray = Object.keys(fruitsObj).reduce((acc,cv) =>{
  acc = acc.concat([[ cv,fruitsObj[cv] ]])
  return acc;
},[])
console.log(fruitsArray)



const data = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [10, 11, 12],
];

// Using reduce flat data array

let sample = data.reduce((acc, cv) => {
  return acc.concat(cv);
},[])
console.log(sample)


const dataTwo = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
  [[10, 11], 12],
];

// Using reduce flat dataTwo array

let dataTwoFlat = dataTwo.reduce((acc,cv) => {
  return acc.concat(cv.flat(Infinity));
  },[])

console.log(dataTwoFlat)

/*

Create these functions which accepts a number value and returns a number value:
  - `increment` adds one to the input value
  - `double` doubles the input value
  - `decrement` decrement 1 from the value 
  - `triple` triples the input 
  - `half` converts the value to half and return the integer value not decimal (use Math.round(21.5) => 21)
*/

function increment(num){
  return num + 1;
}

function double(num){
  return num * 2;
}

function decrement(num){
  return num - 1;
}

function triple(num){
  return num * 3;
}

function half(num){
  return Math.round(num/2);
}

let pipeline = [
  increment,
  double,
  decrement,
  decrement,
  double,
  triple,
  half,
  increment,
];

/*
Using the pipeline variable that contains the collection of functions, taking the initial value 3 find the output.

NOTE: Initial value will be passed to first function the output of that function will be the input to next function.

EXAMPLE:
  initialValue - 3
  increment(3) - return 4
  double(4) - return 8
  decrement(8) - return 7

  ...
*/

pipeline.reduce((acc,cv) => {
  acc = cv(acc); // cv -> increment acc -> 3 So, increment(3) --> returns 4
  return acc;
},3)


let pipeline2 = [
  increment,
  half,
  double,
  decrement,
  decrement,
  triple,
  double,
  triple,
  half,
  increment,
  triple,
];

// Find the output using pipeline2 the initial value if 8

pipeline2.reduce((acc,cv) => {
  acc = cv(acc);
  return acc;
},8)