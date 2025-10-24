// let myAge = 29
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log(myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints += 50
// console.log(bonusPoints)
// bonusPoints -= 75
// console.log(bonusPoints)
// bonusPoints += 45
// console.log(bonusPoints)

function increment() {
    console.log("The button was clicked")
} // best function ever

// function answerOfTheFoundamentalQuestion() {
//     console.log(42)
// }
// answerOfTheFoundamentalQuestion() 

// Increment on clicks
// display the count
let countEl = document.getElementById("count") // pass in argument
let count = 0 
function incrementCount() {
    count += 1
    countEl.innerText = count
}

// console.log(countEl)
// DOM
// Document Object Model
// aka how I use JS to modify a website
function save() {
    console.log(count)
}