/*
let count = 0
console.log(++count)        // 1
console.log(count)          // 1

let count = 0
console.log(count++)        // 0
console.log(count) 

//ternary operation
let number = 5
number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)
number = -5

number > 0
  ? console.log(`${number} is a positive number`)
  : console.log(`${number} is a negative number`)

alert('Welcome to 30DaysOfJavaScript')

let number = prompt('Enter number', 'number goes here')
console.log(number)

const agree = confirm('Are you sure you like to delete? ')
console.log(agree) 


let date = new Date()
console.log(date.getFullYear())

let date = new Date()
console.log(date.getFullYear())
console.log(date.getMonth() + 1)  // because month start count from zero
console.log(date.getDate())
console.log(date.getHours())
console.log(date.getMinutes())
console.log(date.getSeconds())
console.log(date.getMilliseconds())
console.log(date.getTime())
// console.log(date.now())
console.log(date.getDay())

*/

// Exercises: Level 1
console.log(10 == '10')
console.log(parseInt('9.8') == 10)

// truthy
console.log(true === true)
console.log('' == true)
console.log(4 == true)

// falsy
console.log(NaN === true)
console.log("" == true)
console.log(null == true)


console.log(4 > 3)
console.log(4 >= 3)
console.log(4 < 3)
console.log(4 <= 3)
console.log(4 == 4)
console.log(4 === 4)
console.log(4 != 4)
console.log(4 !== 4)
console.log(4 != '4')
console.log(4 == '4')
console.log(4 === '4')



// Exercises: Level 2

// let base = prompt('Enter base: ')
// let height = prompt('Enter height: ')

// let area = (0.5 * base * height)
// console.log(area)

// let sideA = prompt('Enter sideA of your triangle: ')
// let sideB = prompt('Enter sideB of your triangle: ')
// let sideC = prompt('Enter sideC of your triangle: ')

// let perimeter = (sideA + sideB + sideC)
// console.log(perimeter)

// let name = prompt('Enter your name: ')
// name.length > 7 ? console.log('your name is long') : console.log('your name is short.');

let firstName = 'Asabeneh'
let lastName = 'Yetayeh'

firstName.length > lastName.length ? console.log(`Your first name, ${firstName} is longer than your family name, ${lastName}`) : console.log('nothing');

// Exercises: Level 3
let time = new Date()
console.log(time.getTime())