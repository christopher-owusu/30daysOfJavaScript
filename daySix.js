/* LOOPS

for(let i = 0; i <= 5; i++){
  console.log(`${i} * ${i} = ${i * i}`)
}

const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'Iceland']
let newArr = []
for (let i = 0; i < countries.length; i++) {
    newArr.push(countries[i].toUpperCase())
}
console.log(newArr)
// Add everything
const numbers = [1, 2, 3, 4, 5]
let sum = 0
for(let i = 0; i < numbers.length; i++){
  sum  = sum + numbers[i]  // can be shorten, sum += numbers[i]

}
console.log(sum)  // 15

const numbers = [1, 2, 3, 4, 5]
const newArr = []
let sum = 0
for(let i = 0; i < numbers.length; i++){
  newArr.push( numbers[i] ** 2)

}
console.log(newArr)  // [1, 4, 9, 16, 25]

// while loop
let i = 0
while (i <= 5) {
  console.log(i)
  i++
}
// 0 1 2 3 4 5


let i = 0
do {
  console.log(i)
  i++
} while (i <= 5)
// 0 1 2 3 4 5

// for of loop
const numbers = [1, 2, 3, 4, 5]

for (const num of numbers) {
  console.log(num)
}
// 1 2 3 4 5

// adding all the numbers in the array
let sum = 0
for (const num of numbers) {
  sum = sum + num  
	// can be also shorten like this, sum += num
  // after this we will use the shorter synthax(+=, -=, *=, /= etc)
}
console.log(sum) // 15

for (const tech of webTechs) {
  console.log(tech[0]) // get only the first letter of each element,  H C J R N M


// break
for(let i = 0; i <= 5; i++){
  if(i == 3){
    break
  }
  console.log(i)
}// 0 1 2

// continue
for(let i = 0; i <= 5; i++){
  if(i == 3){
    continue
  }
  console.log(i)
}// 0 1 2 4 5

*/

// Exercises: Level 1
const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]
  
  const mernStack = ['MongoDB', 'Express', 'React', 'Node']

/** 
// Countries
for (let i = 0; i < 10; i++) {
    console.log(`For loop ${countries[i]}`)
}

let j = 0;
while(j < 10) {
    console.log(`While loop ${countries[j]}`)
    j++
}

let k = 0
do {
    console.log(`Do while loop ${countries[k]}`)
    k++
} while (k < 10)
**/

/** 
// webTechs 
for (let i = 0; i < 10; i++) {
    console.log(`For loop ${webTechs [i]}`)
}

let j = 0;
while(j < 10) {
    console.log(`While loop ${webTechs [j]}`)
    j++
}

let k = 0
do {
    console.log(`Do while loop ${webTechs [k]}`)
    k++
} while (k < 10)
**/

/** 
// mernStack
for (let i = 0; i < 10; i++) {
    console.log(`For loop ${mernStack [i]}`)
}

let j = 0;
while(j < 10) {
    console.log(`While loop ${mernStack [j]}`)
    j++
}

let k = 0
do {
    console.log(`Do while loop ${mernStack [k]}`)
    k++
} while (k < 10)
**/


// Q2
/** 
// Countries
for (let i = 10; i >= 0; i--) {
    console.log(`For loop ${countries[i]}`)
}

let j = 10;
while(j >= 0) {
    console.log(`While loop ${countries[j]}`)
    j--
}

let k = 10
do {
    console.log(`Do while loop ${countries[k]}`)
    k--
} while (k >= 0)
**/

/** 
// webTechs 
for (let i = 10; i >= 0; i--) {
    console.log(`For loop ${webTechs [i]}`)
}

let j = 10;
while(j >= 0) {
    console.log(`While loop ${webTechs [j]}`)
    j--
}

let k = 10
do {
    console.log(`Do while loop ${webTechs [k]}`)
    k--
} while (k >= 0)
**/

/** 
// mernStack
for (let i = 10; i >= 0; i--) {
    console.log(`For loop ${mernStack [i]}`)
}

let j = 10;
while(j >= 0) {
    console.log(`While loop ${mernStack [j]}`)
    j--
}

let k = 10
do {
    console.log(`Do while loop ${mernStack [k]}`)
    k--
} while (k >= 0)
**/

// for (let i = 0; i < 3; i++) {
//     console.log(countries[i])
// }


// for (let i = 0; i < 7; i++) {
//     let elem = '#'
//     elem = elem.replace([i]) * [i]
//     console.log(elem)
// }


// for (let i = 0; i < 11; i++) {
//     console.log(`${[i]} x ${[i]} = ${[i] * [i]}`)
// }


// for (let i = 0; i <= 10; i++) {
//     console.log(`${[i]} x ${[i] ** 2} = ${[i] ** 3}`)
// }

// all even nums from 0 -100
// for (let i = 0; i <= 100; i++) {
//     if ([i] % 2 === 0) {
//         console.log(i)
//     }
// }

// all odd nums from 0 -100
// for (let i = 0; i <= 100; i++) {
//     if ([i] % 2 !== 0) {
//         console.log(i)
//     }
// }

// sum of all nums from 0 -100
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     sum += i
// }
// console.log(sum)

// sum of all even nums from 0 -100
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     if ([i] % 2 === 0) {
//         sum += i
//     }
// }
// console.log(sum)

// sum of all odd nums from 0 -100
// let sum = 0
// for (let i = 0; i <= 100; i++) {
//     if ([i] % 2 !== 0) {
//         sum += i
//     }
// }
// console.log(sum)

// for (let i = 0; i <= 5; i++) {
//     console.log(Math.random(i))
// }

// for (let i = 0; i <= 5; i++) {
//     console.log(Math.random(i).toString(36).substring(2,7))
// }


// let userInfo = prompt('Enter any number: ')
// for(let i = 0; i < 1; i++) {
//     console.log(Math.random(i).toString(36).substring(2,userInfo))
// }


// for(let i = 0; i < 5; i++) {
//     console.log(`#${Math.random(i).toString(16).substring(2,8)}`)
// }

for(let i = 0; i < 5; i++) {
    console.log(`rgb(${Math.random(i).toString(255).substring(2, 5)})`)
}











