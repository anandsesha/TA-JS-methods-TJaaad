Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`

- Parameter: Does not accept any parameter. In case other parameters are given it does not have any affect in the result.
   - Return: the upper case of the string contained in the variable or the sting on which it is applied.
   - Example:
     ```js
    let name = 'Arya Stark';
    name.toUpperCase(); // "ARYA STARK"

    "Hello".toUpperCase()
    "HELLO"

    name.toUpperCase(0);
    "ARYA STARK"
     ```
   -`toUpperCase` dosen't accept any parameter. When applied on a string or a variable it converts that string into Uppercase.

3. `toLowerCase`

- Parameter: Does not accept any parameter. In case other parameters are given it does not have any affect in the result.
   - Return: the lower case of the string contained in the variable or the sting on which it is applied.
   - Example:
     ```js
    let name = 'ARYA STARK';
    name.toLowerCase(); // "arya stark"
    
    let name = 'arya stark';
    name.toLowerCase(); // "arya stark"

    "HELLO".toLowerCase()
    "hello"

    name.toLowerCase("");
    "arya stark"
     ```
   -`toLowerCase` dosen't accept any parameter. When applied on a string or a variable it converts that string into Lower case characters.

4. `trim`

- Parameter: It does not accept any parameter.
   - Return: trim returns a string with white spaces cut out. In case there are no white spaces it'll return the same string.
   - Example:
     ```js
     let name = '     Arya Stark     ';
     name.trim() // "Arya Stark"
     name.trim(" ") // "Arya Stark"
     name = "    Arya        Stark    "
     name.trim() // "Arya     Stark"
     name = "Arya"
     name.trim() // "Arya"
     ```
   -`trim` will trim the white spaces in the start and the end. Note that it wont trim any space between the words we give.

5. `trimEnd`

- Parameter: it dosen't accept any parameter.In case there are no white spaces it'll return the same string.
   - Return: it returns a new string which is trimmed from the end of the string entered.
   - Example:
     ```js
    let greeting = '   Hello world!   ';   
    greeting.trimEnd() // "   Hello world!"
    greeting.trimEnd(0); //"   Hello world!"
    greeting.trimEnd(""); //"   Hello world!"
     ```
   -`trimEnd` is used remove the whitespaces from the end of a string. 

6. `trimStart`

- Parameter: it dosen't accept any parameter.In case there are no white spaces it'll return the same string.
   - Return: it returns a new string which is trimmed from the start of the string entered.
   - Example:
     ```js
    let greeting = '   Hello world!   ';
    greeting.length // 18
    greeting.trimStart() // "Hello world!   "
    let trimSt = greeting.trimStart()
    trimSt.length // 15

    greeting.trimStart(0); // "Hello world!   "
    greeting.trimStart(""); // "Hello world!   "
     ```
   -`trimStart` is used remove the whitespaces from the beginning of a string. 

7. `concat`

- Parameter: it accepts multiple strings. If no string is supplied as parameter then it returns a string back on which concat method was applied. 
   - Return: it returns a combined string of the two values entered. 
   - Example:
     ```js
    let strA = "Hi" 
    let strB = "I am John" 
    strA.concat(strB) // "HiI am John"
    strA.concat(" ",strB) // "Hi I am John"
    let num = 12;
    strA.concat(num); // "Hi12"
    "".concat(strA) // "Hi"
    "".concat(1,8) // "18"
    "".concat(1,true) // "1true"
    strA.concat(1,{}) // "Hi1[object Object]"
     ```
   -`concat` method is used to concatenate two strings and return a new string with the concatenated value. Change does not afftect the oringinal string entered. If the entered values are not of type string it connverts to string and concatenates them and outputs a string.

8. `endsWith`

- Parameter: It accepts two parameters string and a length parameter which is optional where you can specify at which length value that character will be found. 
   - Return: it returns a boolean result true/false. 
   - Example:
     ```js
    let strA = "Hi I am Anand Z"
    strA.endsWith("Z") // true
    strA.endsWith("z") // false
    strA.endsWith() // false
    strA.endsWith('Z',4) //false
    strA.endsWith('Z',15) //true
    strA.endsWith('H',1) //true
    strA.endsWith('',0) //true
     ```
   -`endsWith` method checks if the entered string ends with the checked character/word or not. Note that the searched string must be entered as per the exact charater to be searched since it is case sensitive. We can perform a character search using its length.

9. `includes`

- Parameter: It accepts two parameters string and a position parameter which is optional where you can specify at which position value from where you want to start searching. 
   - Return: it returns a boolean result true/false. 
   - Example:
    ```js
    let string = "AltCampus"
    string.includes('C') //true
    string.includes('c') //false
    string.includes('C',4) // false
    string.includes('A',0) // true
    string.includes(0) // false
    ```
   -`includes` method checks if the string includes the entered character or not. Note that if only position parameter is entered it will return false.

10. `indexOf`

  - Parameter: It accepts two parameters string and a fromIndex parameter which is optional where you can specify at which position value from where you want to start searching. Default is 0.
   - Return: it returns a boolean result true/false. 
   - Example:
    ```js
    let str = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    string.includes("") //0
    string.includes(1) //-1
    string.includes("j") // 20
    str.indexOf("",5) // 5
    str.indexOf("j",21) //-1
    str.indexOf("j",-1) //20
    ```
   -`includes` method checks if the string includes the entered character or not. Note that if only position parameter is entered it will return false. Negative position start point is accepted but a from index in place of searchString will give -1 default value.

11. `lastIndexOf`

  - Parameter: It accepts two parameters string and a  fromIndex parameter which is optional where you can specify at which position value from where you want to start searching. Default is 0.
   - Return: it returns a boolean result true/false. 
   - Example:
    ```js
    let str = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
    string.includes("") //0
    string.includes(1) //-1
    string.includes("j") // 20
    str.indexOf("",5) // 5
    str.indexOf("j",21) //-1
    str.indexOf("j",-1) //20
    ```
   -`lastIndexOf` method gives the last ccurred index of that character i.e the last time this character occurred in that string.

12. `padEnd`

  - Parameter: It accepts 2 parameters - length of how much character to pad and the sting to pad. If the length is equal to smaller than the current string's length it returns the same string as it is.
   - Return: it returns the resultannt string with the padding applied to the end. 
   - Example:
    ```js
    let str = 'AltCampus';
    str.padEnd(19,'0') //"AltCampus0000000000"
    str.padEnd(2,'0') // "AltCampus"
    str.padEnd() // "AltCampus"
    str.padEnd(2) // "AltCampus"
    str.padEnd('0') //"AltCampus"
    ```
   -`padEnd` method is used to add padding by using another string until the resultant string reaches a particular length. Padding is applied here from the end of the inputed string.

13. `padStart`

- Parameter: It also accepts two parameters - a length and a padding string. Padding applied from the starting of the string.
   - Return: it returns a string. Default will be the original string returned.
   - Example:
    ```js
    let str = 'AltCampus';
    str.padStart(12,'0') //"000AltCampus"
    str.padStart(12,' ') // "  AltCampus"
    str.padStart() // "AltCampus"
    str.padStart(2) // "AltCampus"
    str.padStart('0') //"AltCampus"
    ```
   -`padStart` method is used to add padding by using another string until the resultant string reaches a particular length. Here padding is applied from the start of the string.

14. `repeat`

- Parameter: accepts 1 parameter - count. The number of times to repeat.
   - Return: a string with the reprated input string.
   - Example:
    ```js
    let str = 'AltCampus';
    str.repeat(2) // "AltCampusAltCampus"
    str.repeat() // ""
    str.repeat(-1) // Error
    str.repeat(true) // "AtlCampus"
    str.repeat(false) // ""
    str.repeat("2") // "AltCampusAltCampus"
    ```
   -`repeat` method repeates the string multiple times and returns a new string. The count can be given as any data type.

15. `replace`

- Parameter: Takes 2 strings as input one is the original string and the other is the replacement string.
   - Return: a new string with the replaced word or character.
   - Example:
    ```js
    let str = 'AltCampus';
    str.replace("Campus","School") // "AltCampus"
    str.replace("Campus") // "Atlundefined"
    str.replace() // "AtlCampus"
    str.replace("Campus",1) // "Alt1"
    str.replace("A"," ") // " tlCampus"
    ```
   -`repeat` method replaces a character or word in your string. Even if other type is entered as replaceble string it converts to string and replaces.

16. `slice`

- Parameter: 2 parameters- beginIndex and endIndex (optional).
   - Return: .
   - Example:
    ```js
    let str = 'AltCampus';
    str.slice() // "AltCampus"
    str.slice(2) // "tCampus"
    str.slice(2,7) // "tCamp"
    str.slice(2,-1) // "tCampu"
    str.slice(-2) // "us"
    str.slice(undefined,3) // "Alt"
    ```
   -`slice` method is taking out a portion of string from one position mentioned to another. If begin index is bigger than the string inputed then the same string is returned as output. If the end Index is less than the begin index an empty string is returned.

17. `split`

- Parameter: key parameter is the string which separates into substrings (where the split would be done in that string) and optional limit parameter.
   - Return: an array of smaller strings. If no string is specified then the whole sentence is returned as a array with 1 string element.
   - Example:
    ```js
    const str = 'The quick brown fox jumps over the lazy dog.';
    str.split() // ["The quick brown fox jumps over the lazy dog."]

    str.split(" ") //(9) ["The", "quick", "brown", "fox", "jumps", "over", "the", "lazy", "dog."]

    str.split(" ", 5) // ["The", "quick", "brown", "fox", "jumps"]
    ```
   -`split` method is used to split the string into smaller chunks.

18. `substring`


- Parameter: startIndex - the first character to include from. And endIndex - the first character to exclude from.
   - Return: a new string which is between the specified start and end index.
   - Example:
    ```js
    const str = 'The quick brown fox jumps over the lazy dog.';
    str.substring(5) // "uick brown fox jumps over the lazy dog."

    str.substring(5,-1) // "The q"

    str.substring(-1,12) //  "The quick br"
    ```
   -`subString` method returns a small chunk of string from specified start index to start of the excluded end index.