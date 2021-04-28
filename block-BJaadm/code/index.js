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

// Create an array peopleName and store value of sex key from persons array

let peopleName = persons.map((person) => person.name)
console.log(peopleName)

// Create an array peopleGrade and store the value of grade key from persons array

let peopleGrade = persons.map((person) => person.grade)
console.log(peopleGrade)

// Create an array peopleSex and store the value of sex key from persons array

let peopleSex = persons.map((person) => person.sex)
console.log(peopleSex)

// Log the filtered named of people in peopleName that starts with 'J' or 'P'

console.log(peopleName.filter((peopleName) => peopleName.startsWith('J') || peopleName.startsWith('P')))

// Log the length of filtered named of people in peopleName that starts with 'A' and 'C'

console.log(
  peopleName.filter((name) => {
    if(name.startsWith('A') || name.startsWith('C')){
    return name;
    }
  })
  .map((name) => name.length)
)


// Log all the filtered male ('M') in persons array

console.log(persons.filter((person) => {
  if(person.sex === 'M'){
    return person;
  }
}))

// Log all the filtered female ('F') in persons array

console.log(persons.filter((person) => {
  if(person.sex === 'F'){
    return person;
  }
}))

// Log all the filtered female ('F') whose name starts with 'C' or 'J' in persons array

console.log(
  persons.filter((person) => {
    if(person.sex === 'F'){
      return person;
    }
  }).filter((person) => {
    if(person.name.startsWith('C') || person.name.startsWith('J')){
      return person;
    }
  })
)

// Log all the even numbers from peopleGrade array

console.log(peopleGrade.filter((num) => num%2 === 0))

// Find the first name that starts with 'J' in persons array and log the object

console.log(peopleName.find((people) => people.startsWith('J')))

// Find the first name that starts with 'P' in persons array and log the object

console.log(peopleName.find((people) => people.startsWith('P')))

// Find the first name that starts with 'J', grade is greater than 10 and is a female

console.log(
  persons.filter((person) => {
    if(person.sex === 'F' && (person.grade > 10) && person.name.startsWith('J')){
      return person;
    }
  })
)

// Filter all the female from persons array and store in femalePersons array

let femalePersons = persons.filter((person) => person.sex == 'F')
console.log(femalePersons)

// Filter all the male from persons array and store in malePersons array

let malePersons = persons.filter((person) => person.sex == 'M')
console.log(malePersons)

// Find the sum of all grades and store in gradeTotal

let gradeTotal = peopleGrade.reduce((acc,cv) =>{
  acc = acc + cv;
  return acc;
},0)
console.log(gradeTotal)

// Find the average grade

console.log(gradeTotal/peopleGrade.length);

// Find the average grade of male

let avgGradeMale = persons.filter(((person) => person.sex == 'M'))
.map((person) => person.grade)
.reduce((acc,cv) =>{
  acc = acc + cv;
  return acc;
},0)

console.log(avgGradeMale)

// Find the average grade of female

let avgGradeFemale = persons.filter(((person) => person.sex == 'F'))
.map((person) => person.grade)
.reduce((acc,cv) =>{
  acc = acc + cv;
  return acc;
},0)

console.log(avgGradeFemale)

// Find the highest grade

let highestGrade = persons.map((person) => person.grade)
.sort((a,b) => {return a-b}).pop()

console.log(highestGrade)

// Find the highest grade in male

let highestGradeMale = persons.filter(((person) => person.sex == 'M'))
.map((person) => person.grade)
.sort((a,b) => {return a-b}).pop()

console.log(highestGradeMale)

// Find the highest grade in female

let highestGradeFemale = persons.filter(((person) => person.sex == 'F'))
.map((person) => person.grade)
.sort((a,b) => {return a-b}).pop()

console.log(highestGradeFemale)

// Find the highest grade for people whose name starts with 'J' or 'P'

let highestGradeJOrP = persons.filter((person) => person.name.startsWith('J') || person.name.startsWith('P'))
.map((person) => person.grade)
.sort((a,b) => {return a-b}).pop()

console.log(highestGradeJOrP)

// Sort the peopleGrade in ascending order and log the value of peopleGrade. Notice did the elements of peopleGrade got changed?

peopleGrade.sort((a,b) => {return a-b})
console.log(peopleGrade) //Yes the value changed after using sort() because it mutates the array.

// Sort the peopleGrade in descending order

peopleGrade.sort((a,b) => {return b-a})
console.log(peopleGrade)

// Sort the peopleGrade in descending order this time you have to make sure you don't mutate the original array

console.log([...peopleGrade].sort((a,b) => {return b-a}))

// Sort the array peopelName in ascending `ABCD..Za....z`

console.log(peopleName.sort())

// Sort the array peopelName in ascending `ABCD..Za....z`. Make sure not to mutate the array
console.log([...peopleName].sort())