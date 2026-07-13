// using tenary operator
let firNum =  500
let secNum = 1000

let output = firNum > secNum ? 'FIRST NUMBER IS GREATER' : 'SECOND NUMBER IS GREATER'

console.log(output)

// using switch 

// let dayOfWeek = prompt("what day is it today")

// switch(dayOfWeek) {
//    case 'monday': //dayOfWeek === "monday"
//       console.log('today is monday, stand up and go to work')
//       break;
//    case 'tuesday':
//       console.log('today is tuesday, stand up and go to work')
//       break;
//    case '':
//       alert('Please insert a valid day of the week here')
//       break;

//    default:
//       console.log('this is not a valid day of the week')
//       break
// }

//using if else 
let dOW = "tuesday"

if(dOW === 'monday'){
   console.log('today is monday, stand up and go to work')
}  
else if(dOW === 'tuesday') {
   console.log('today is tuesday, stand up and go to work')
}
else{
   console.log('this is not a valid day of the week')
}


let age = Number(prompt('Tell us your age to know if you are eligible to out at night'))
if(age === '' || isNaN(age)){
   console.log('this is an empty answer')
}
else if(age < 18){
   console.log("YOU CAN'T GO OUT AT NIGHT, YOU ARE TOO YOUNG TO WALK LATE NIGHT")
}
else if(age >= 18 && age <= 40) {
   console.log("YOU CAN GO OUT LATE, YOU ARE A YOUNG ADULT ")
}
else if (age > 40 && age <= 100){
   console.log("YOU ARE TOO OLD TO GO OUT AT NIGHT, IT'S NOT SAFE FOR OLD PEOPLE")
}
else{
   console.log('THIS IS NOT A VALID AGE, TRY AGAIN')
}