// number
let num = 30
num = 30.60
num = NaN
// num = '50'

console.log(num, typeof(num))

// STRINGS
let stri = 'my name is promise'
stri = '2000'
stri = "this is not me sitting her today"
stri = `this is valuemax   `

console.log(stri, typeof(stri))

let name = prompt("what is your name")
// string interpolation
let aboutMe = `my name is ${name}`

console.log(aboutMe)

// BOOLEAN
let isMarried = 12 > 80
isMarried = 80 > 12

console.log(isMarried, typeof(isMarried))

// NULL
const nothing = null

console.log(nothing)

// UNDEFINDED

let koko 
koko = 'bimpe'

console.log(koko)

// ARRAY 
let users = ["emmanuel", "emmanuel", "michael", "rokeeb", "lucy", "areegbe", "mary", "kemi"]
console.log(users)

let comp = `my name is ${users[0]} i am an instructor in valuemax for over  4 years now, and mr ${users[5]} is also an instuctor`
console.log(comp)

// OBJECT

let about = {
   name: 'oneh promise',
   
   school: 'Babcock University',
   food: 'Eba',
   course: ["html", "CSS", "git and github", "js", "react js"],
   maritalStatus: 'Married',
   age: '12 years'
}

// dot notation
let compAboutMe = `i am ${about.age} old`

// bracket notation
compAboutMe = `i am ${about['age']} old`

console.log(compAboutMe)