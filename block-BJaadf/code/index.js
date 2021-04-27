let fruits = ['Banana', 'Orange', 'Apple', 'Mango'];

// Add a new element ('Papaya') into fruits array at end

fruits.push("papaya");

// Remove the last element from fruits array

fruits.pop();

// Log the current length of fruits array

console.log(fruits.length)

// Remove the first element from fruits and log the value of fruits (use delete arr[0])

delete fruits[0]
console.log(fruits)

// Log the element on index 0 and 1

console.log(fruits[0], fruits[1])

// If the element at 0 index is undefined and index 1 is 'Banana' shift all the values to one lower index (use shift method)

fruits.shift()

// Add a new element to the start ('Guava') and shift the index of all other to one higher value

fruits.unshift("Guava")

// Add a new element to the start ('Dragon Fruit') and shift the index of all other to one higher value

fruits.unshift("Dragon Fruit")

// Log true or false based on the value at index 0 and 1 is 'Dragon Fruit' and 'Guava' or not

// console.log(fruits[0] === "Dragon Fruit")
// console.log(fruits[1] === "Guava")

if(fruits[0] === "Dragon Fruit" && fruits[1] === "Guava"){
    console.log(true)
}else{
    console.log(false)
}

// Update the value of index 1 to `Pears`

fruits[1] = "Pears"

// Add the 'Kiwi' and 'Lemon' to the index 1 and 2 and shift the other element to next index (use splice to add element)

fruits.splice(1,0,"Kiwi","Lemon")

// Remove (slice) all the element from index 5

fruits.slice(5)

// Create another array named moreFruits with values ['Berries', 'Melons']

let moreFruits = ['Berries', 'Melons']

// Concat moreFruits into fruits array (re-assign so the value gets updated)

fruits = fruits.concat(moreFruits)

// Log the name of all fruit in console

fruits.forEach((name) => console.log(name))

// Convert each fruit name to lowercase and log it

// for(let i=0; i<fruits.length; i++){ 
//     console.log(fruits[i].toLowerCase());
// }
fruits.forEach((name) => console.log(name.toLowerCase()))

// Convert all fruits name into lowercase and store in new array named lowercaseFruits

let lowercaseFruits = fruits.map((fruitName) => fruitName.toLowerCase());

// Convert all fruits name into uppercase and store in new array named uppercaseFruits

let uppercaseFruits = fruits.map((fruitName) => fruitName.toUpperCase());

let numbers = [1, 2, [3, 4]];
let numbersTwo = [1, 2, [3, 4, [5, 6]]];
let numbersThree = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];

// Convert the numbers array to one level element. Remove sub-arrays to individual elements and log them

console.log(numbers.flat())

// Convert the numbersTwo array to one level element. Remove all sub-arrays to individual elements and log them.
// (for multiple level flat accepts argument by default it's 1 `array.flat(2)`)

let numbersTwoFlat = numbersTwo.flat(2)
console.log(numbersTwoFlat)

// Convert the numbersThree array to one level element.
// Remove all sub-arrays to individual elements, log them and update the value of numbersThree to the new flat array.

let newFlatArray = numbersThree.flat(Infinity)
console.log(newFlatArray)

// Use forEach to log all the elements of numberThree array

newFlatArray.forEach((num) => console.log(num));

// Create a new variable named doubleNumbers that store the numberThree array (each element should be multiplied by 2). Use map

let doubleNumbers = newFlatArray.map((element) => element * 2);

// Create a new variable named tripleNumbers that store the numberThree array (each element should be multiplied by 3). Use map

let tripleNumbers = newFlatArray.map((element) => element * 3);

// Create a new variable named halfNumbers that store the numberThree array (each element should be divided by 2). Use map

let halfNumbers = newFlatArray.map((element) => element / 2);

// Create a new variable named oddNumbers that store all the odd numbers in numbersThree array

let oddNumbers = newFlatArray.filter((element) => element%2 !== 0);

// Create a new variable named evenNumbers that store all the even numbers in numbersThree array

let evenNumbers = newFlatArray.filter((element) => element%2 === 0);

// Find the index of 10 in numbersThree array

newFlatArray.findIndex((num) => num === 10);

// Reverse the values of numbersThree array

newFlatArray.sort((a,b) => b-a);
//OR
newFlatArray.reverse();

// Reverse the values of numbersTwo array

numbersTwoFlat.sort((a,b) => b-a);

// Join all fruits with '-', convert to uppercase and log it

// console.log(fruits.map((element) => element.toUpperCase()).join("-"))
console.log(fruits.join('-').toUpperCase())

// Join all fruits with '&', convert to lowercase and log it

// console.log(fruits.map((element) => element.toLowerCase()).join("&"))
console.log(fruits.join('&').toLowerCase())