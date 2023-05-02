//note 
/*
const PI = Math.PI

console.log(PI)                            // 3.141592653589793

// Rounding to the closest number
// if above .5 up if less 0.5 down rounding

console.log(Math.round(PI))                // 3 to round values to the nearest number

console.log(Math.round(9.81))              // 10

console.log(Math.floor(PI))                // 3 rounding down

console.log(Math.ceil(PI))                 // 4 rounding up

console.log(Math.min(-5, 3, 20, 4, 5, 10)) // -5, returns the minimum value

console.log(Math.max(-5, 3, 20, 4, 5, 10)) // 20, returns the maximum value

const randNum = Math.random() // creates random number between 0 to 0.999999
console.log(randNum)

// Let us  create random number between 0 to 10

const num = Math.floor(Math.random () * 11) // creates random number between 0 and 10
console.log(num)

//Absolute value
console.log(Math.abs(-10))      // 10

//Square root
console.log(Math.sqrt(100))     // 10

console.log(Math.sqrt(2))       // 1.4142135623730951

// Power
console.log(Math.pow(3, 2))     // 9

console.log(Math.E)             // 2.718

// Logarithm
// Returns the natural logarithm with base E of x, Math.log(x)
console.log(Math.log(2))        // 0.6931471805599453
console.log(Math.log(10))       // 2.302585092994046

// Returns the natural logarithm of 2 and 10 respectively
console.log(Math.LN2)           // 0.6931471805599453
console.log(Math.LN10)          // 2.302585092994046

// Trigonometry
Math.sin(0)
Math.sin(60)

Math.cos(0)
Math.cos(60)

console.log('I hope everyone is enjoying the 30 Days Of JavaScript challenge.\nDo you ?') // line break
console.log('Days\tTopics\tExercises')
console.log('Day 1\t3\t5')
console.log('Day 2\t3\t5')
console.log('Day 3\t3\t5')
console.log('Day 4\t3\t5')
console.log('This is a backslash  symbol (\\)') // To write a backslash
console.log('In every programming language it starts with \"Hello, World!\"')
console.log("In every programming language it starts with \'Hello, World!\'")
console.log('The saying \'Seeing is Believing\' isn\'t correct in 2020')
 
let js = 'JavaScript'
console.log(js.length)         // 10
let firstName = 'Asabeneh'
console.log(firstName.length)  // 8

let lastIndex = string.length - 1

console.log(lastIndex)  // 9
console.log(string[lastIndex])    // t

// does not imclude the last element
let string = 'JavaScript'
console.log(string.substr(4,6))    // Script

let country = 'Finland'
console.log(country.substr(3, 4))   // land

// includes teh last number
let string = 'JavaScript'

console.log(string.substring(0,4))     // Java
console.log(string.substring(4,10))    // Script
console.log(string.substring(4))       // Script

let string = '30 Days Of JavaScript'

console.log(string.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(string.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

let firstName = 'Asabeneh'

console.log(firstName.split())    // Change to an array - > ["Asabeneh"]
console.log(firstName.split(''))  // Split to an array at each letter ->  ["A", "s", "a", "b", "e", "n", "e", "h"]

let countries = 'Finland, Sweden, Norway, Denmark, and Iceland'

console.log(countries.split(','))  // split to any array at comma -> ["Finland", " Sweden", " Norway", " Denmark", " and Iceland"]
console.log(countries.split(', ')) //  ["Finland", "Sweden", "Norway", "Denmark", "and Iceland"

let string = '   30 Days Of JavaScript   '

console.log(string)
console.log(string.trim(' '))

let string = '30 Days Of JavaScript'

console.log(string.includes('Days'))     // true
console.log(string.includes('days'))     // false - it is case sensitive!

let string = '30 Days Of JavaScript'
console.log(string.replace('JavaScript', 'Python')) // 30 Days Of Python

let string = '30 Days Of JavaScript'
console.log(string.charAt(0))        // 3

let string = '30 Days Of JavaScript'
console.log(string.charCodeAt(3))        // D ASCII number is 68

let string = '30 Days Of JavaScript'

console.log(string.indexOf('D'))          // 3
console.log(string.indexOf('script'))     // -1 because it doesn't exist

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'

console.log(string.lastIndexOf('love'))       // 67
console.log(string.lastIndexOf('you'))        // 63

let string = '30'
console.log(string.concat("Days", "Of", "JavaScript")) // 30DaysOfJavaScript

let string = 'Love is the best to in this world'

console.log(string.startsWith('Love'))   // true
console.log(string.startsWith('love'))   // false

let string = 'Love is the most powerful feeling in the world'

console.log(string.endsWith('world'))         // true
console.log(string.endsWith('love'))          // false

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.search('love'))          // 2
console.log(string.search(/javascript/gi))  // 7

let string = 'I love JavaScript. If you do not love JavaScript what else can you love.'
console.log(string.match('love'))

let txt = 'In 2019, I ran 30 Days of Python. Now, in 2020 I am super exited to start this challenge'
let regEx = /\d+/

// d with escape character means d not a normal d instead acts a digit
// + means one or more digit numbers,
// if there is g after that it means global, search everywhere.

console.log(txt.match(regEx))  // ["2", "0", "1", "9", "3", "0", "2", "0", "2", "0"]
console.log(txt.match(/\d+/g)) // ["2019", "30", "2020"]

let string = 'love'
console.log(string.repeat(10)) // lovelovelovelovelovelovelovelovelovelove

*/

//Exercise: Level 1

let DaysOfJavaScript =  '30 Days Of JavaScript';
console.log(DaysOfJavaScript)
console.log(DaysOfJavaScript.length)
console.log(DaysOfJavaScript.toUpperCase())
console.log(DaysOfJavaScript.toLowerCase())
console.log(DaysOfJavaScript.substr(0, 3))
console.log(DaysOfJavaScript.substring(0, 2))
console.log(DaysOfJavaScript.substr(3, -1))
let inc = DaysOfJavaScript.includes("Script")
console.log(inc)
console.log(DaysOfJavaScript.split())
console.log(DaysOfJavaScript.split(" "))

let newStr = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(newStr.split(", "))

console.log(DaysOfJavaScript.replace('JavaScript', 'Python'))
console.log(DaysOfJavaScript.charAt(15))
let charCode = DaysOfJavaScript.charCodeAt('J');
console.log(charCode)

let firstInstanceOfA = DaysOfJavaScript.indexOf('a')
console.log(firstInstanceOfA)

let lastInstanceOfA = DaysOfJavaScript.lastIndexOf('a')
console.log(lastInstanceOfA)

let newNewStr = 'You cannot end a sentence with because because because is a conjunction'
console.log(newNewStr.indexOf('because'))
console.log(newNewStr.lastIndexOf('because'))
console.log(newNewStr.search('because'))

let trimWord = ' 30 Days Of JavaScript ';
console.log(trimWord)
console.log(trimWord.trim())


console.log(DaysOfJavaScript.startsWith('30'))
console.log(DaysOfJavaScript.endsWith('Script'))
console.log(DaysOfJavaScript.match('a'))

let start = '30 Days of';
let end = 'JavaScript';
console.log(start.concat(end))


console.log(DaysOfJavaScript.repeat(2))

// Exercise: Level 2
console.log("The quote \'There is no exercise better for the heart than reaching down and lifting people up.\' by John Holmes teaches us to help one another.")
console.log("Love is not patronizing and charity isn\'t about pity, it is about love. Charity and love are the same \-- with charity you give love, so don\'t just give money but reach out your hand instead.")

let ten = '10';
console.log(typeof ten)
console.log(typeof Number(ten))

let jargon = 'I hope this course is not full of jargon'
console.log(jargon.includes("jargon"))

let randNum = Math.floor(Math.random() * 101);
console.log(randNum)

let randNumLater = Math.floor(Math.random() * 100) + 50;
console.log(randNumLater)

// console.log('
// 1\ 1\ 1\ 1\1\
// 2\ 1\ 2\ 4\8\
// 3\ 1\ 3\ 9\27\
// 4\ 1\ 4\ 1\ 64\
// 5\ 1\ 5\ 2\ 125\
// ');


// Exercises: Level 3