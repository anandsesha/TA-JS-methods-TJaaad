// Use the below two arrays and practice array methods
var numbers = [1, 12, 4, 18, 9, 7, 11, 3, 101, 5, 6, 9];
var strings = ['This', 'is', 'a', 'collection', 'of', 'words'];

/*
NOTE:
While using methods like push, pop, sort etc it mutates the original array.

Clone the array before using sort method: [...arr]

*/

// - Find the index of `101` in numbers

console.log(numbers.indexOf(101))

// - Find the last index of `9` in numbers

console.log(numbers.lastIndexOf(9))

// - Convert value of strings array into a sentance like "This is a collection of words"

let sentence = strings.join(" ")
console.log(sentence)

// - Add two new words in the strings array "called" and "sentance"

strings.push("called","sentence")

// - Again convert the updated array (strings) into sentance like "This is a collection of words called sentance"

sentence = strings.join(" ")
console.log(sentence)

// - Remove the first word in the array (strings)

let removeFirstWord = [...strings].shift()
console.log(removeFirstWord)

// - Find all the words that contain 'is' use string method 'includes'

let containsIs = strings.filter((element) => element.includes("is"))
console.log(containsIs)

// - Find all the words that contain 'is' use string method 'indexOf'

let containsWordIs = strings.filter((element) => element.indexOf("is") !== -1)
console.log(containsWordIs)

// - Check if all the numbers in numbers array are divisible by three use array method (every)

let divisibleByThree = numbers.every((val) => val%3 === 0)
console.log(divisibleByThree)

// -  Sort Array from smallest to largest

let ascendingSort = [...numbers].sort((a,b) => a-b)
console.log(ascendingSort)

let ascendingSortString = [...strings].sort()
console.log(ascendingSortString)

// - Remove the last word in strings

console.log(strings.pop())

// - Find largest number in numbers

let largestNumUsingSort = [...numbers].sort((a,b) => b-a)
console.log(largestNumUsingSort[0])

// let largestNumUsingSortAgain = [...numbers].sort((a,b) => a-b).pop()
// console.log(largestNumUsingSortAgain)

// - Find longest string in strings

let largestSrtUsingSort = [...strings].sort((a,b) => b.length-a.length)
console.log(largestSrtUsingSort[0])

// - Find all the even numbers

let evenNums = numbers.filter((num) => num%2 === 0)
console.log(evenNums)

// - Find all the odd numbers

let oddNums = numbers.filter((num) => num%2 !== 0)
console.log(oddNums)

// - Place a new word at the start of the array use (unshift)

let newWord = [...strings].unshift("Hi")
console.log(newWord)

// - Make a subset of numbers array [18,9,7,11]

console.log(numbers.slice(3,7))

// - Make a subset of strings array ['a','collection']

console.log(strings.slice(2,4))

// - Replace 12 & 18 with 1221 and 1881

let result = numbers.map((num) => {
  if(num == 12){
    return 1221;
  }else if(num == 18){
    return 1881;
  }else{
    return num;
  }
});
console.log(result)

// console.log([...numbers].splice(numbers.indexOf(12),1,1221))
// console.log([...numbers].splice(numbers.indexOf(18),1,1881))

// - Replace words in strings array with the length of the word

let resultStrings = strings.map((word) => word.length);
console.log(resultStrings)

// - Find the sum of the length of words using above question

let sumOfLengthOfWords = resultStrings.reduce((acc,cv) =>  {
  acc = acc + cv;
  return acc;
}, 0);

console.log(sumOfLengthOfWords)

// - Customers Array
var customers = [
  { firstname: 'Joe', lastname: 'Blogs' },
  { firstname: 'John', lastname: 'Smith' },
  { firstname: 'Dave', lastname: 'Jones' },
  { firstname: 'Jack', lastname: 'White' },
];
// - Find all customers whose firstname starts with 'J'

let firstNameWithJ = customers.filter((val) => val.firstname.startsWith("J"))

for(let i = 0; i<firstNameWithJ.length; i++){
  console.log(firstNameWithJ[i].firstname, firstNameWithJ[i].lastname)
}

// - Create new array with only first name

let onlyFirstName = customers.map((val) => val.firstname)
console.log(onlyFirstName)

// - Create new array with all the full names (ex: "Joe Blogs")

let allFullName = customers.map((val) => val.firstname + ` ` + val.lastname)
console.log(allFullName)

// - Sort the array created above alphabetically

console.log([...allFullName].sort())

// - Create a new array that contains only user who has at least one vowel in the firstname.

let atLeastOneVowel = customers.filter((name) => {
  if(name.firstname.includes('a') || name.firstname.includes('e') || name.firstname.includes('i') || name.firstname.includes('o') || name.firstname.includes('u')){
    return true;
  }else{
    return false;
  }
})

console.log(atLeastOneVowel)