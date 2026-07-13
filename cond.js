// TENARY OPERATOR
let age = 16
let ageChecker = age >= 20 ? 'YOU ARE OLD ENOUGH TO DRINK ALCOHOL' : 'YOU ARE NOT OLD ENOUGH TO DRINK ALCOHOL'

console.log(ageChecker)


let num = 31
let numChecker = num % 2 === 1 ? 'THIS IS A ODD NUMBER' : 'THIS IS AN EVEN NUMBER'
console.log(numChecker)

// USING SWITCH
let days = 'tuesday'

switch(days){
         
   case 'tuesday':
      alert('TODAY IS TUESDAY, STAND AND GO TO WORK, YOU WON"T DIE')
      break
   default:
      console.log('THIS IS NOT VALID DAY OF THE WEEK, CHECK YOU ANSWER')
      break
}


// USING IF-ELSE STATEMENT

let newAge = prompt('what is your age')

if(newAge === ''){
   console.log('You should put somthing here please')
}
else if(newAge <= 18){
   console.log('you are too young to drink alcohol')
}
else if(newAge > 18 && newAge <= 40) {
   console.log('you are old enough to drink alcohol')
}
else if (isNaN(newAge)){
   console.log('this is not a valid age')
}
else{
   console.log('you are too old to drink alcohol')
}