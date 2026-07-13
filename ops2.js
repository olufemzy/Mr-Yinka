// arithemetic operator binary (*, + , -, /, %, **) , unary (--, ++)

let num1 = 51  
let num2 = 2

let calc = num1 / num2

console.log(++calc) //Dcecrement == 50

// assignment operator =, +=, -=, /=, %=, *= 

let num_1 = 100
// num_1 = num_1 + 50
num_1 += 50
console.log(`100 += 50 gives ${num_1}`)
num_1 -= 30
console.log(`150 -= 30 gives ${num_1}`)

// comparison operator <, >, <=, >=, ===, !==

let firNum = 300
let secNum = 300
let checkBig = firNum !== secNum

console.log(checkBig)


// logical operator 
// && (AND) all must be true, to result to true
// || (OR) at least one must be true, to result to true
//  ! (NOT) negata boolean

let meme = 50 > 30 
let mama = 60 > 90
let momo = 90 === 90

let gate = !meme || mama || !momo

console.log(gate)

// tenary opertor used for conditional statement
let nene = 100
let nono = 300

let big = nene < nono ? 'FIRST NUMBER IS GREATER' : 'SECOND NUMBER IS GREATER'

console.log(big)

let mynum1 = Number(prompt('give us first number'))
let mynum2 = prompt('give us second number')
let mynum3 = prompt('give us third number')
console.log(typeof(mynum1), typeof(mynum2), typeof(mynum3))

mynum1 = +mynum1
mynum2 = Number(mynum2)
// mynum3 = parseInt(mynum3)
mynum3 = parseFloat(mynum3)

console.log(mynum1, mynum2, mynum3)
console.log(typeof(mynum1), typeof(mynum2), typeof(mynum3))


const miniBank = () => {
   
}