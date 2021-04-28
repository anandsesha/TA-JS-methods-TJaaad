let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.

// let findLongestWord = [...words].sort((a,b) => a.length - b.length).pop()
// console.log(findLongestWord)

function findLongestWord(arr){
  return [...words].sort((a,b) => a.length - b.length).pop()
}
console.log(findLongestWord(words))

// - Convert the above array "words" into an array of length of word instead of word.

let lengthOfWord = [...words].map((word) => word.length)
console.log(lengthOfWord)

// - Create a new array that only contains word with atleast one vowel.

let atleastOneVowel = [...words].filter((word) => {
  if(word.includes('a') || word.includes('e') || word.includes('i') || word.includes('o') || word.includes('u')){
    return true;
  }else{
    return false;
  }
});
console.log(atleastOneVowel)

// - Find the index of the word "rhythm"

let indexOfWord = words.findIndex((word) => word === "rhythm")
console.log(indexOfWord)

// - Create a new array that contians words not starting with vowel.

let notStartingWithVowel = [...words].filter((word) => {
  if(
    !(word.startsWith('a') || word.startsWith('e') || word.startsWith('i') || word.startsWith('o') || word.startsWith('u'))
    ){
    return true;
  }else{
    return false;
  }
});
console.log(notStartingWithVowel)

// - Create a new array that contianse words not ending with vowel

let notEndingWithVowel = [...words].filter((word) => {
  if(
    !(word.endsWith('a') || word.endsWith('e') || word.endsWith('i') || word.endsWith('o') || word.endsWith('u'))
    ){
    return true;
  }else{
    return false;
  }
});
console.log(notEndingWithVowel)


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers

// let sum = 0;
// let sumArray = numbers.forEach((num) => sum = sum + num)

let sumArray = numbers.reduce((acc,cv) => {
  return acc + cv;
},0)
console.log(sumArray)

// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]

let multByThree = [...numbers].map((num) => num*3)
console.log(multByThree)

// - Create a new array that contains only even numbers

let onlyEven = [...numbers].filter((num) => num%2 === 0)
console.log(onlyEven)

// - Create  a new array that contains only odd numbers.

let onlyOdd = [...numbers].filter((num) => num%2 !== 0)
console.log(onlyOdd)

// - Create a new array that should have true for even number and false for odd numbers.

let booleanEvenOdd = [...numbers].map((num) => {
  if(num%2 === 0){
    return true;
  }else{
    return false;
  }
})
console.log(booleanEvenOdd)

// - Sort the above number in assending order.

console.log([...numbers].sort((a,b) => a-b))

// - Does sort mutate the original array?

// Yes if sort() method is used it mutates changes the original numbers array. [1, 1, 2, 6, 8, 10, 12, 13, 16, 18]

// - Find the sum of the numbers in the array.

let sumNum = numbers.reduce((acc,cv) => {
  acc =  acc + cv;
  return acc;
},0)
console.log(sumNum)

//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers

let averageNumbers = numbers.reduce((acc,cv) => {
  acc += cv;
  return acc; //87
},0)/numbers.length; //87 / 10 (Avg)
console.log(averageNumbers)


let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.

// let averageWordLength = lengthOfWord.reduce((acc,cv) => {
//   acc = acc + cv;
//   return acc;
// },0) /numbers.length;

function averageWordLength(arr){
  return [...words].map((word) => word.length)
  .reduce((acc,cv) => acc+cv,0) / words.length
}
console.log(averageWordLength(strings))