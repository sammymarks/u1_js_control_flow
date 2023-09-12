// //CONDITIONALS
// // if () {}


// if (true) {
// //    console.log("this is true")
// }

// if (1>0) {
// //    console.log(`1 is greater than 0`)
// }


//if else
/*
let age = 16
if (age >= 18) {
    console.log(`you can vote`)
} else {
    console.log("you're too young")
}
*/

//EQUALS
/*
== vs ===
== will only compare the content -> `1989` == 1989 (true)
=== compares content AND datatype -> `2112' === 2112 (false)
*/

// const dayOfWeek = `Monday`

// if (dayOfWeek == `Monday`) {
//     console.log(`get to class`)
// } else if (dayOfWeek == `Saturday`) {
//     console.log("it's Saturday, no class")
// } else {
//     console.log(`please enter another day`)
// }


//IF ELSE

// const yourMoney = 50
// const catPrice = 100

// if (yourMoney == catPrice) {
//     console.log(`you have just enough to buy a cat`)
// } else if (yourMoney > catPrice) {
//     console.log(`you can buy a cat and will have dollars left over`)
// } else if (yourMoney < catPrice) {
//     console.log(`you cannot buy a cat, you need more dollars :(`)
// } else {
//     console.log(`what is money?`)
// }

//MULTIPLE CONDITIONS
/* operators
&& = And operator - Both conditions are required 
|| = Or operator - Only 1 is required 
! = Bang operator - Tests the Boolean opposite of the value (True->False or False -> True)
*/

// let age = 16

// if (age <20 && age >=13) {
//     console.log(`you are a teenager`)
// }

// const userName = `sammymarks`
// const isLoggedIn = true

// if (isLoggedIn == true) {
//     console.log(`hello ${userName}`)
// } else {
//     "please log in"
// }

//TERNARY OPERATORS
// write if else statements in a single line (only works with true/false)
// trades flexibility with ease and readability
//  [conditional] ? [truthy] : [falsey]

// let age = 18

// age >= 18 ? console.log(`you can vote`) : console.log(`you cannot vote`)

//SWITCH STATEMENT
// //alternative to if else
// //switch () {}
//     // case [test] : [output] break

// const food = `fish`

// switch(food) {
//     case `chicken`: 
//         console.log(`I want chicken`) 
//         break 
//     case `steak`:
//         console.log(`mmmm steak`)
//         break
//     case `fish`:
//         console.log(`nope - allergies`)
//         break
//     default:
//         console.log(`enter a valid entree`)
// }

//LOOPS AND ITERATION

// if () {}
// switch () {}
// for () {}

// where we start, where we end, how much we increment by each time

// for (let i=0 ; i < 10 ; i+=2) {
//     console.log(i)
// }

//COMBINING LOOPS AND ARRAYS

const food = [`burrito`, `pizza`, `ramen`, `chimichangas`, `goulash`,`kimchi` ]

// for (i = 0; i < food.length; i++) {
//     console.log(`let's have ${food[i]} for dinner tonight`)
// }

             
            
const wizards = [
    {name: "Harry Potter", house: "Gryffindor"}, 
    {name: "Lord Voldomort", house: "Slytherin"}, 
    {name: "Cedric Diggory", house: "Hufflepuff"},
    {name: "Luna Lovegood", house: "Ravenclaw"},  
    {name: "Albus Dumbledor", house: "Gryffindor"}, 
    {name: "Merlin", house: "Slytherin"}, 
    {name: "Pomona Sprout", house: "Hufflepuff"}, 
    {name: "Gilderoy Lockheart", house: "Ravenclaw"}, 
    {name: "Ron Weasley", house: "Gryffindor"}, 
    {name: "Severus Snape", house: "Slytherin"}, 
    {name: "Nymphadora Tonks", house: "Hufflepuff"}, 
    {name: "Padma Patil", house: "Ravenclaw"}, 
    {name: "Hermoine Granger", house: "Gryffindor"} 
   ]

for (i=0; i<wizards.length; i++) {
    if (wizards[i].house == `Slytherin`) {
       console.log(wizards[i].name)
    }
}
