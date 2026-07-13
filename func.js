// function declaration
function callMyName() {   // declaring the function
   let getName = prompt('what is your name please')
   alert(`YOOO!!! ${getName} WE WELCOME TO THE CLUB OF JS`)
}

// callMyName() // invoking the declared function

//function expression
const myName = function () {
   let getName = prompt('Please tell us your name before yoyu go')
   alert(`YOOO!!! ${getName} WE WELCOME TO THE CLUB OF JS`)
}

// myName() //calling the function here

//arrow funcion
const getAllNames = () => {
   let getName = prompt('what is your name please')
   alert(`YOOO!!! ${getName} WE WELCOME TO THE CLUB OF JS`)
}

// getAllNames()


// function with parameters and arguments

// function sumValues(num1, num2){ //parameters
//    // let sum = num1 + num2 + num3
//    // console.log(`the sum of ${num1} + ${num2} + ${num3} is ${sum}`)
//    let sum = num1 * num2
//    console.log(`the multiplication of ${num1} * ${num2} is ${sum}`)
// }
// let firNum = prompt('first value')
// let secNum = prompt('second value')

// sumValues(firNum, secNum) //argument

