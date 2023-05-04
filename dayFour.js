


















// Exercises: Level 1
// question 1
let inputPrompt = prompt('Enter your age: ')
let remainingYears = 18 - inputPrompt
inputPrompt >= 18 ? console.log('You are old enough to drive') : console.log(`You have ${remainingYears} years more to drive`);


// question 2
let myAge = 23
let yourAge = prompt('Enter your age: ')
let ageDifference = yourAge - myAge
if (yourAge > myAge) {
    console.log(`You are ${ageDifference} years older than me.`)
}else {
    console.log('I am older than you')
}


// question 3
let a = 2
let b = 5

if(a > b){
    console.log('a is greater than b')
}else {
    console.log('a is less than b')
}   


a > b ? console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);

// question 4
let num = prompt("Enter a number: ")
let evenNum = num % 2

if(evenNum == 0) {
    console.log(`The number ${num} is an even number`)
}else{
    console.log(`The number ${num} is an odd number`)
}



// Exercises: Level 2
// question 1
let score = prompt('Enter students score here: ')
if (score >= 80 && score <= 100) {
    console.log('A')
} else if (score >= 70 && score <= 89) {
    console.log('B')
} else if (score >= 60 && score <= 69) {
    console.log('C')
} else if (score >= 50 && score <= 59) {
    console.log('D')
}else if (score >= 0 && score <= 49) {
    console.log('F')
} else {
    console.log('Can\'t find correct grade for the student')
}


// question 2
let month = prompt('Enter the month here: ')
if (month == 'September'  || month == 'October' || month == 'November') {
    console.log('Autumn')
} else if (month == 'December' || month == 'January' || month == 'February') {
    console.log('Winter')
} else if (month == 'March' || month == 'April' || month == 'May') {
    console.log('Spring')
} else if (month == 'June' || month == 'July' || month == 'August') {
    console.log('Summer')
} else {
    console.log('Enter the correct month')
}


// question 3
let day = prompt('What is the day  today? ')

switch(day) {
    case 'Sunday':
        console.log(`${day} is a weekend`);
        break;
    case 'Saturday':
        console.log(`${day} is a weekend`);
        break;
    case 'Friday':
        console.log(`${day} is a week day`);
        break;
    case 'Thursday':
        console.log(`${day} is a week day`);
        break;
    case 'Wednesday':
        console.log(`${day} is a week day`);
        break;
    case 'Tuesday':
        console.log(`${day} is a week day`);
        break;
    case 'Monday':
        console.log(`${day} is a week day`);
        break;
    default:
        console.log(`${day} is not a correct day`);
}



// Exercises: Level 3
let currMonth = prompt('Enter the month here: ').toLocaleLowerCase()
if (currMonth == 'september'  || currMonth == 'april' || currMonth == 'june' || currMonth == 'november') {
    console.log(`${currMonth} has 30 days`)
} else if (currMonth == 'january'  || currMonth == 'march' || currMonth == 'july' || currMonth == 'august' || currMonth == 'december' || currMonth == 'may' || currMonth == 'october') {
    console.log(`${currMonth} has 31 days`)
} else if (currMonth == 'february') {
    console.log(`${currMonth} has 28 days`)
} else {
    console.log(`${currMonth} is not a right month`)
}