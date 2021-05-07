// NOTE: You can not use reduce methods to solve this exercise

// function countAllPeople() {
//   let totalPeople = 0;
//   for(let i=0; i<got.houses.length; i++){
//     totalPeople += got.houses[i].people.length
//   }
//   return totalPeople;
// }

function countAllPeople(){
  let totalPeople = 0;
  got.houses.forEach((house) => {
    totalPeople = totalPeople + house.people.length
  })
  return totalPeople;
}

function peopleByHouses() {

  got.houses.forEach((house) => {
    let totalPeopleByHouse = 0;
    totalPeopleByHouse +=  house.people.length
    console.log(`No. of people in house ${house.name} is ${totalPeopleByHouse}`)
  })
}

// function peopleByHouses() {
//   let final = {};
//   got.houses.forEach((house) => {
//     console.log(house.name)
//     final[house.name] = house.people.length;
//   });
//   return final;
// }


function everyone() {
  let namesArr = []
  got.houses.forEach((house) => {
      house.people.map((person) => {
      namesArr.push(person.name)
    })  
  })
  return namesArr;
}

function nameWithS() {
  let namesArr = []
  got.houses.forEach((house) => {
      house.people.map((person) => {
        if(person.name.includes('s') || person.name.includes('S'))
        {
          namesArr.push(person.name)
        }
      })  
  })
  return namesArr;
}

function nameWithA() {
  let namesArr = []
  got.houses.forEach((house) => {
      house.people.map((person) => {
        if(person.name.includes('a') || person.name.includes('A'))
        {
          namesArr.push(person.name)
        }
      })  
  })
  return namesArr;
}

function surnameWithS() {
  let surnameArr = []
  // got.houses.forEach((house) => {
  //   house.people.map((person) => {
  //     if(person.name.split(' ')[1].startsWith('S')){
  //       surnameArr.push(person.name)
  //     }
  //   })
  // })
  
  everyone().map((person) => {
    if(person.split(' ')[1].startsWith('S')){
      surnameArr.push(person)
    }
  })
  return surnameArr;
}

function surnameWithA() {
  let surnameWithA = []
  everyone().map((person) => {
    if(person.split(' ')[1].startsWith('A')){
      surnameWithA.push(person)
    }
  })
  return surnameWithA;
}

function peopleNameOfAllHouses() {
  let final = {}

  everyone().map((person) => {
    console.log(person)
    final[person.split(' ')[1]] = final[got.houses.forEach((house) => {
      house.people.forEach((person) => person.name)
    })]
  })
  return final;
}

// Testing your result after writing your function
console.log(countAllPeople());
// Output should be 33

console.log(peopleByHouses());
// Output should be
//{Arryns: 1, Baratheons: 6, Dothrakis: 1, Freys: 1, Greyjoys: 3, Lannisters: 4,Redwyne: 1,Starks: 8,Targaryens: 2,Tullys: 4,Tyrells: 2}

console.log(everyone());
// Output should be
//["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "King Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy", "Margaery (Tyrell) Baratheon", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn", "Edmure Tully", "Brynden Tully", "Olenna (Redwyne) Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(nameWithS(), 'with s');
// Output should be
// ["Eddard "Ned" Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon "Bran" Stark", "Rickon Stark", "Jon Snow", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Queen Cersei (Lannister) Baratheon", "Stannis Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Loras Tyrell", "Catelyn (Tully) Stark", "Lysa (Tully) Arryn"]

console.log(nameWithA());
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon", "Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon", "Daenerys Targaryen", "Viserys Targaryen", "Balon Greyjoy", "Yara Greyjoy", "Margaery Baratheon", "Loras Tyrell", "Catelyn Stark", "Lysa Arryn", "Olenna Tyrell", "Walder Frey", "Jon Arryn", "Khal Drogo"]

console.log(surnameWithS(), 'surname with s');
// Output should be
// ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow", "Catelyn Stark"]

console.log(surnameWithA());
// Output should be
// ["Lysa Arryn", "Jon Arryn"]

console.log(peopleNameOfAllHouses());
// Output should be
// {Arryns: ["Jon Arryn"], Baratheons: ["Robert Baratheon", "Stannis Baratheon", "Renly Baratheon", "Joffrey Baratheon", "Tommen Baratheon", "Myrcella Baratheon"], Dothrakis: ["Khal Drogo"], Freys: ["Walder Frey"], Greyjoys: ["Balon Greyjoy", "Theon Greyjoy", "Yara Greyjoy"], Lannisters: ["Tywin Lannister", "Tyrion Lannister", "Jaime Lannister", "Cersei Baratheon"], Redwyne: ["Olenna Tyrell"], Starks: ["Eddard Stark", "Benjen Stark", "Robb Stark", "Sansa Stark", "Arya Stark", "Brandon Stark", "Rickon Stark", "Jon Snow"], Targaryens: ["Daenerys Targaryen", "Viserys Targaryen"], Tullys: ["Catelyn Stark", "Lysa Arryn", "Edmure Tully", "Brynden Tully"], Tyrells: ["Margaery Baratheon", "Loras Tyrell"]}
