Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`

- Parameter: a separator value. This can be any primitive data type or any character and that will be converted to a string value using which we will join the elements of te array.
   - Return: It returns a single string with the joined output.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.join('') // "123"
     numbers.join(' ') // "1 2 3"
     numbers.join('-') // "1-2-3"
     numbers.join(1) // "11213"
     numbers.join(true) // "1true2true3"
     ```
   - `join` method takes in an primitive data type input or any character input and returns a string value which is the joined string.
   - No it does not mutate the original array.

3. `flat`

- Parameter: depth. Which is the level upto which we need to flatten the array.
   - Return: a new array which is flattened to the depth specified.
   - Example:
     ```js
     let numbers = [0, 1, 2, [3, 4,[5,6]]];
     numbers.flat() // [0, 1, 2, 3, 4, Array(2)]
     numbers.flat(1) // [0, 1, 2, 3, 4, Array(2)]
     numbers.flat(Infinity) // [0, 1, 2, 3, 4, 5, 6]
     ```
   - `flat` method is used for flattening out an array. i.e arrays inside a array are flattened. We can specify the extent to which we want to flatten it.  
   - No it does not mutate the original array.


4. `push`

- Parameter: an element which can be a number string etc of any type.
   - Return: the length of the new array formed.
   - Example:
     ```js
     let animals = ['pigs', 'goats', 'sheep'];
      animals.push('') // (4) ["pigs", "goats", "sheep", ""]
      animals.push("lion") // ["pigs", "goats", "sheep", "", "lion"]
      animals.push(true) // ["pigs", "goats", "sheep", "", "lion",true]
      animals.push(1) // ["pigs", "goats", "sheep", "", "lion", 1]    
      animals.push({}) // ["pigs", "goats", "sheep", "", "lion", 1,{}]
     ```
   - `push` method adds an element to the array in the last index of the array i.e at the end. 
   - Yes it mutates the original array.


5. `indexOf`

- Parameter: the element you want to search in the array.
   - Return: the first index of the element.
   - Example:
    ```js
    let numbers = [1, 2, 3];
    numbers.indexOf() // -1
    numbers.indexOf(1) // 0
    numbers.indexOf(Hi) // Error
    numbers.indexOf("Hi") //3
    ```
   - `indexOf` is used to find the index of the elements in an array. It gives the first index of the element. If the index is not found it will return -1.
   - No it does not mutate the original array.


6. `lastIndexOf`

- Parameter: an element to search and an optional parameter of from where (index) to start searching.
   - Return: an index of the last occurrecne of that element.
   - Example:
     ```js
     var numberss = [2, 5, 9, 2];
     numberss.lastIndexOf(2) // 3
     numberss.lastIndexOf() // -1 
     numberss.lastIndexOf(5) // 1
     numberss.lastIndexOf(10) // -1 
     ```
   - `lastIndexOf` gives the last index at which the searched element will be found. That is the last occurrence of that element in that array. Defalut value is -1 returned if element is not found in that array or if no parameter is given.
   - No it does not mutate the original array.


7. `includes`

- Parameter: the element to search in that array.
   - Return: a boolean true/false.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     num.includes() // false
     num.includes(2) // true
     num.includes(true) // false
     ```
   - `includes` returns a boolean true if the element is found in that array if not returns false. 
   - No it does not mutate the original array


8. `reverse`

- Parameter: the element to search in that array.
   - Return: .
   - Example:
     ```js
     let numbers = ['one', 'two', 'three'];
      numbers.reverse() // ["three", "two", "one"]
     ```
   - `reverse` method reverses the order of elements in the given array. 
   - Yes it mutates the original array


9. `every`

- Parameter: a callback function which includes the current element and optional parameters like index of the current element, the original array.
   - Return: a boolean true/false depending on if its a truthy value or falsy value.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     let everyResult = numbers.every((num) => num > 0);
     everyResult // true

     let colors = ["Aqua", "Blue", "Gray"];
     let colorsResult = colors.every((color) => color == "ray");
     colorsResult // false
     ```
   - `every` method will return true only if all the elements of the input array return true. 
   - No it does not mutate the original array


10. `shift`

- Parameter: no parameter.
   - Return: the element which is removed from the array.
   - Example:
     ```js
     let animals = ['pigs', 'goats', 'sheep'];
     animals.shift() // "pigs"
     animals.shift(3) // Even if value is given it removes 0th index.
     ```
   - `shift` is used to remove the first element of the array and shifting the other elements to a lower index by 1. 
   - Yes it mutates the original array

11. `splice`

- Parameter: start Index, optional - end Index(How many elements to delete) and  optional extra element to add.
   - Return: the array with the remaining elements which were not removed. 
   - Example:
     ```js
     let months = ['Jan', 'March', 'April', 'June'];
     months.splice(0) // ["Jan", "March", "April", "June"] => [] 
     months.splice(0,1) // ["Jan"]
     months.splice(0,2,"Dec") // ["Dec", "April", "June"]
     months.splice(0,"Nov") // []
     ```
   - `splice` is used to remove or add elements in an array. We can also specify how many elements to delete from the start index.  
   - No it does not mutate the original array.

12. `find`

- Parameter: a call back function which accepts an element to find.
   - Return: a value of the first element found.
   - Example:
     ```js
     let months = ['Jan', 'March', 'April', 'June'];
     months.find((month) => month == "Jan") // "Jan"

     ```
   - `find` returns the first element in the array which satisfies the given condition.  
   - No it does not mutate the original array

13. `unshift`

- Parameter: an element to be added to the array which can be Number, string, boolean, null, undefined or an object.
   - Return: the length of the new array.
   - Example:
     ```js
     let animals = ["", "lion", true, 1, {…}];
     animals.unshift() // returns the same array.
     animals.unshift("Dog") // 6. animals -> ["Dog", "", "lion", true, 1, {…}]
     animals.unshift(undefined) // 7
     animals.unshift(null) // 8
     ```
   - `unshift` is used to add elements to the start of the array. The other element will be pushed to a higher index by 1. 
   - Yes it mutates the original array

14. `findIndex`

- Parameter: a call back function which accepts an element to find.
   - Return: the index value of the element found. Else returns -1 if not found.
   - Example:
     ```js
     let num = [5, 12, 8, 130, 44];
     num.findIndex((num) => num > 13); // 3
      num.findIndex((num) => num == 1); // -1
      num.findIndex((num) => num == 122); // -1
     ```
   - `find` returns the index of the first value which matches the given condition
   - No it does not mutate the original array

15. `filter`

- Parameter: a call back function which accepts a function reference. We can also provide optional parameters like index, array.
   - Return: a new array with the elements which are result of true from the callback function condition.
   - Example:
     ```js
     let num = [5, 12, 8, 130, 44];
     num.filter((num) => num > 10) // [12, 130, 44]
     num.filter((num) => num > 1000) // []
     ```
   - `filter` is used to filter out some values from the array. The callback function returns a boolean which if its true, then that value is stored in the the new array by the filter() method.
   - No it does not mutate the original array


16. `flat`

- Parameter: depth. Which is the level upto which we need to flatten the array.
   - Return: a new array which is flattened to the depth specified.
   - Example:
     ```js
     let numbers = [0, 1, 2, [3, 4,[5,6]]];
     numbers.flat() // [0, 1, 2, 3, 4, Array(2)]
     numbers.flat(1) // [0, 1, 2, 3, 4, Array(2)]
     numbers.flat(Infinity) // [0, 1, 2, 3, 4, 5, 6]
     ```
   - `flat` is used t flatten out an array. i.e falttening out arrays inside arrray.
   - No it does not mutate the original array


17. `forEach`

- Parameter: accepts a callback function. And optional parameters like current value of the elemnt, index array and initial value.
   - Return: undefined.
   - Example:
     ```js
     let num = [5, 12, 8, 130, 44];
     num.forEach(num => console.log(num)); // undefined 
     ```
   - `forEach` method basically gives access to each element of the array. 
   - No it does not mutate the original array

18. `map`

- Parameter: a call back function which accepts a function reference. We can also provide optional parameters like index, array.
   - Return: a new array which has the result of the function it executes.
   - Example:
     ```js
     let num = [1, 4, 9, 16];
      num.map((num) => num > 2); // [false, true, true, true]
     ```
   - `map` method executes the callback function and stores the result of that in a new array in the same index as input is taken.  
   - No it does not mutate the original array.

19. `pop`

- Parameter: an element which can be a number string etc of any type.
   - Return: the removed element.
   - Example:
     ```js
     let animals = ['pigs', 'goats', 'sheep'];
      animals.push('') // (4) ["pigs", "goats", "sheep", ""]
      animals.push("lion") // ["pigs", "goats", "sheep", "", "lion"]
      animals.push(true) // ["pigs", "goats", "sheep", "", "lion",true]
      animals.push(1) // ["pigs", "goats", "sheep", "", "lion", 1]    
      animals.push({}) // ["pigs", "goats", "sheep", "", "lion", 1,{}]
     ```
   - `pop` method removes the last element of the array i.e at the last index at the end of the array. 
   - Yes it mutates the original array.

20. `reduce`

- Parameter: an accumulator, current Value, the callback function and the initial value (optional).
   - Return: A single value which is of type as per the initial value.
   - Example:
   ```js
   let array = [1, 2, 3, 4, 5];
   array.reduce((acc,num) => acc+num,0) //15

   let arrayString = ["A","B","C"]
   arrayString.reduce((acc,num) => acc+num,"") // "ABC"      
   ```
   - `reduce` is used to return a single value from a collection of values. 
   - No it does not mutates the original array.

21. `slice`

- Parameter: an element which can be a number string etc of any type.
   - Return: the removed element.
   - Example:
     ```js
     let animals = ['pigs', 'goats', 'sheep'];
      animals.push('') // (4) ["pigs", "goats", "sheep", ""]
      animals.push("lion") // ["pigs", "goats", "sheep", "", "lion"]
      animals.push(true) // ["pigs", "goats", "sheep", "", "lion",true]
      animals.push(1) // ["pigs", "goats", "sheep", "", "lion", 1]    
      animals.push({}) // ["pigs", "goats", "sheep", "", "lion", 1,{}]
     ```
   - `pop` method removes the last element of the array i.e at the last index at the end of the array. 
   - Yes it mutates the original array.


22. `some`

- Parameter: accepts a calback function with one element in it and also accepts optional parameters the index and original array.
   - Return: a boolean. If result is truthy value then returns true, else returns false.
   - Example:
   ```js
   let array = [1, 2, 3, 4, 5];
   array.some((num) => num > 3 ) // true
   array.some((num) => num > 5 ) // false
   ```
   - `some` method returns true if the callback function it accepts returns true for atleast one condition mentioned. So some() will return true.
   - No it does not mutate the original array.