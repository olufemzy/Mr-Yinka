console.log("=============MATH METHODS===========")
// Math.PI
let piValue = Math.PI  //property
console.log(piValue)

let num = 87787.16565
// Math.round()
console.log(Math.round(num))
// Math.floor()
console.log(Math.floor(num))
// Math.ceil()
console.log(Math.ceil(num))
// Math.random()
let ran = Math.random() * 11  // 0-10
console.log(Math.floor(ran))


// generate 10 - 20
let num2 = (Math.random() * 10) + 10

console.log(num2)

console.log(Math.max(2, 88,88,9,34))
console.log(Math.min(2, 88,88,9,34))
console.log(Math.sqrt(100))



console.log("========STRING METHODS=======")
let writeUp = '     I LovE JavaScriPt     '
console.log(writeUp)

// .length
console.log(writeUp.length) // property
// .slice()
console.log(writeUp.slice(2,6))
// .substring()
console.log(writeUp.substring(2,6)) 
writeUp = writeUp.toLowerCase()

console.log(writeUp)

// toUpperCase()
writeUp = writeUp.toUpperCase()

console.log(writeUp)

// .split()
console.log(writeUp.split(" "))

// trim()
writeUp = writeUp.trim()
console.log(writeUp)

// .includes
console.log(writeUp.includes('JAVASCRIPT'))
// .replace()
writeUp = writeUp.replace('JAVASCRIPT', 'PYTHON')

console.log(writeUp)

// .indexOf()
console.log(writeUp.indexOf('PYTHON'))

let message = 'CONGRULATIONS YOU NOW HAVE A USERNAME CALLED '
let userName = prompt("what is your name, let's create a username for you")
userName = userName.toLowerCase().trim().replace(' ', '')
let randValue = Math.round(Math.random() * 100)

console.log(userName)

if(userName === ''){
   
}
else{
   alert(`${message}${userName}${randValue}`)
}