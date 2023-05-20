//console.log('JS file included!')
/*
    The above line of code is commented out using a single line comment. the shortcut is control+ / or command +
    
    This comment block is a multi-line comment, the short is shift+alt+A
*/

let myName = "Daniela"
console.log(myName)

myName = "Daniela Gonzalez"
console.log(myName)

// declaring a variable, the default value will be set to undefined
let myProfession

// assigning a value to the variable
myProfession = "Student"
console.log(myProfession)

// To const you HAVE to set the variable. Ex I can't only leave it with myAdress without anything. For the Let I can
const myAddress = "Earth"
console.log(myAddress)

const numA = 4
const numB = 7

console.log(numA + numB)
console.log (numA * numB)

console.log(numA === numB)
console.log(numA < numB)

console.log(numA + 3 == numB && numA != numB)
console.log(numA === numB || numA <= numB)

const numC = 4.9871
console.log(numC.toFixed(2)) // toFixed is a method of a number
console.log(numC.toPrecision(1))

console.log(parseInt(numC)) //parseInt is a function
console.log(parseFloat(numC))

const myFirstName = "Daniela"
const dogs = 1
const dog1Name = "Manchis"

console.log("I am " + myFirstName + ". I have " + dogs + " dog, " + dog1Name)

console.log(`I am ${myFirstName}. I have ${dogs}, ${dog1Name}`)