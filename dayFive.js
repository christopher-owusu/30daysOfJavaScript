
// const newArr = Array(8).fill('X')
// console.log(newArr)

// let arrOne = [1,2,3]
// let arrTwo = [4,5,6]
// console.log(arrOne.concat(arrTwo))


// const numbers = [1, 2, 3, 4, 5]

// console.log(numbers.indexOf(5)) // -> 4
// console.log(numbers.indexOf(0)) // -> -1
// console.log(numbers.lastIndexOf(3)) 

// const number = [1, 2, 3, 4, 5]

// console.log(number.includes(5)) // true
// console.log(number.includes(0)) // false

// const numb = [1, 2, 3, 4, 5]
// console.log(Array.isArray(numb)) // true

// const numbe = 100
// console.log(Array.isArray(numbe)) // false

// // let us check if a banana exist in the array
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// let index = fruits.indexOf('banana')  // 0

// if(index === -1){
//    console.log('This fruit does not exist in the array')  
// } else {
//     console.log('This fruit does exist in the array')
// }


// const num = [1, 2, 3, 4, 5]
// console.log(num.toString()) // 1,2,3,4,5 

// const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
// console.log(names.toString()) // Asabeneh,Mathias,Elias,Brook

// const numberss = [1, 2, 3, 4, 5]
// console.log(numberss.join()) // 1,2,3,4,5

// const name = ['Asabeneh', 'Mathias', 'Elias', 'Brook']

// console.log(name.join()) // Asabeneh,Mathias,Elias,Brook
// console.log(name.join('')) //AsabenehMathiasEliasBrook
// console.log(name.join(' ')) //Asabeneh Mathias Elias Brook
// console.log(name.join(', ')) //Asabeneh, Mathias, Elias, Brook
// console.log(name.join(' # ')) //Asabeneh # Mathias # Elias # Brook

// console.log(numberss.slice()) // -> it copies all  item
// console.log(numberss.slice(0)) // -> it copies all  item
// console.log(numberss.slice(0, numbers.length)) // it copies all  item
// console.log(numberss.slice(1,4)) // -> [2,3,4] // it doesn't include the ending position
// numbers.splice(0,1)
// console.log(numberss)            // remove the first item

// const nu = [1, 2, 3, 4, 5, 6]
// nu.splice(3, 3, 7, 8, 9)
// console.log(nu.splice(3, 3, 7, 8, 9))  // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// numberss.push(6)
// console.log(numberss) // -> [1,2,3,4,5,6]

// numberss.pop() // -> remove one item from the end
// console.log(numberss) // -> [1,2,3,4,5]

// numberss.shift() // -> remove one item from the beginning
// console.log(numberss) // -> [2,3,4,5]

// numberss.unshift(0) // -> add one item from the beginning
// console.log(numberss) // -> [0,1,2,3,4,5]

// numberss.reverse() // -> reverse array order
// console.log(numberss) // [5, 4, 3, 2, 1]

// const webTechs = [
//     'HTML',
//     'CSS',
//     'JavaScript',
//     'React',
//     'Redux',
//     'Node',
//     'MongoDB'
//   ]
  
//   webTechs.sort()
//   console.log(webTechs) // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]
  
//   webTechs.reverse() // after sorting we can reverse it
//   console.log(webTechs) // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

//   const arrayOfArray =  [[1, 2, 3], [1, 2, 3]]
//   console.log(arrayOfArray[0]) // [1, 2, 3]






  
// Exercise: Level 1
// let newArr = [];

// let fiveElem = [1,2,3,4,5,6,7]
// console.log(fiveElem.length)
// console.log(fiveElem[0])
// console.log(fiveElem[fiveElem.length - 1])

// let nums = [0,1,2,3,4,5,89]
// let lastIndex = nums.length - 1
// console.log(nums[lastIndex])

// let middleIndex = fiveElem.length / 2
// console.log(middleIndex)

// const mixedDataTypes = [1, 3.4, 'string', NaN, true, undefined]
// console.log(mixedDataTypes.length)

// const itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
// // console.log(itCompanies)
// // console.log(itCompanies.length)
// // console.log(itCompanies[0])
// // console.log(itCompanies[itCompanies.length - 1])
// // console.log(itCompanies[(itCompanies.length / 2)])

// for(let i=0; i < itCompanies.length; i++) {
//     console.log(`the elems are ${itCompanies[i].toUpperCase()}`);
// }
// console.log(itCompanies.toString())
// let search = 'Apple'
// let inside = itCompanies.includes(search)
// inside ? console.log(`${search} found`) : console.log(`${search} not found`)

// // let os = itCompanies.match('o')
// // console.log(os)

// console.log(itCompanies.sort())
// console.log(itCompanies.reverse())
// console.log(itCompanies.slice(0, 3))
// console.log(itCompanies.slice(4, 7))
// // console.log(itCompanies.slice(itCompanies.length/2))
// console.log(itCompanies.shift())
// console.log(itCompanies.pop())
// console.log(itCompanies.splice())


// Exercise: Level 2


// let text =
// 'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
// let word = text.split(' ')
// console.log(word)
// console.log(word.length)

// const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// let addMeat = shoppingCart.unshift('Meat')
// console.log(shoppingCart)
// let addSugar = shoppingCart.push('Sugar')
// console.log(shoppingCart)
// let removeHoney = shoppingCart.splice(4, 5)
// console.log(shoppingCart)
// shoppingCart[3] = 'Green Tea' 
// console.log(shoppingCart)


// const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
// const backEnd = ['Node','Express', 'MongoDB']
// let fullStack = frontEnd.concat(backEnd)
// console.log(fullStack)


const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]
console.log(ages.sort())
console.log(`the range is ${ages[ages.length - 1] - ages[0]}`)

// minimum
console.log(Math.min.apply(null, ages))

// maximum
console.log(Math.max.apply(null, ages))


// median
let med = ages.length / 2
console.log(ages[med])

// average
let total = 0
for (let i = 0; i < ages.length; i++) {
    total += ages[i]
    // console.log(total)
}

 let avg = total / ages.length
 console.log(avg)


// range
let min = ages[0]
let max = ages[ages.length - 1] 
console.log(max - min)

