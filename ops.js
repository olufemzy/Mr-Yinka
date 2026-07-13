// let num1 = 40
// let num2 = 100
// let num3 = 99

// let calc = num1 + num2 + num3

// console.log(`the sum of ${num1} + ${num2} + ${num3} = ${calc}`)

// calc = num2 % num3
// console.log(`the reminder of ${num2} % ${num3} = ${calc}`)

// calc = num2 ** 2
// console.log(`the raise to power 2 of ${num2} = ${calc}`)

// let num4 = 400
// // num4 = --num4


// console.log(++num4)

// // ASSIGNMENT OPERATOR
// let num_1 = 400
// num_1 += 300 // num_1 = num_1 + 300 // 700
// num_1 -= 300 // num_1 = num_1 - 300

// console.log(`assignment operator += ${num_1} `)

// // COMPARISION OPERATOR
// let num5 = 500
// let num6 = '500'

// let compare = num5 !== num6

// console.log(compare)

// let len = prompt('WHAT IS THE LENGHT OF THE RECTANGLE')
// let brd = prompt('WHAT IS THE BREADTH THE RECTANGLE')

// let area = len * brd

// console.log(`the area of rectagle with the length ${len}cm and breadth ${brd}cm is ${area}cm `)



// // LOGICAL OPERATOR
// let isMarried = 50 === 70
// let isBarren = 70 >= 70
// let isDivorced = 70 < 80

// let see = isMarried && isBarren && isDivorced

// console.log(!see)

// // TENARY OPERATOR
// const bigNum = 600
// const smallNum = 100

// const checkSize = bigNum > smallNum ? 'FIRST NUMBER IS GREATER THAN SECOND NUMBER' : 'SECOND NUMBER IS GREATER THAN FIRST NUMBER'

// console.log(checkSize)


// let half1 = "my name is "
// let half2 = "promise"

// console.log(half1 + half2) //concatenating operator



// NaN
// let myNum1 = prompt("what is your first value")
// let myNum2 = prompt("what is your second value")

// console.log(typeof(myNum1))
// console.log(typeof(myNum2))
// let answer = myNum1 + myNum2

// console.log(`the answer of this expression is ${answer}`)


// TYPE CASTING
let num = "90"
console.log(`${num} is a`,typeof(num))

// num = Number(num)  // conversion using Number()
// num = +num  // conversion using plus sign (+)
num = parseInt(num)  // conversion using parseInt()

console.log(`${num} is a`, typeof(num))

console.log("====================================")
let conNum = "90.89"
console.log(`${conNum} is a`,typeof(conNum))

// conNum = Number(conNum)  // conversion using Number()
// conNum = +conNum  // conversion using plus sign (+)
conNum = parseFloat(conNum)  // conversion using parseInt()

console.log(`${conNum} is a`, typeof(conNum))


let flo = "9097.7665"

console.log(parseInt(flo))


let priceDictation = prompt('DICTATE YOUR PRICE ')

console.log(typeof(priceDictation))

let discountAnswer = priceDictation >= 50000 ? '10% DISCOUNT' : '20% DISCOUNT'

console.log(discountAnswer)
