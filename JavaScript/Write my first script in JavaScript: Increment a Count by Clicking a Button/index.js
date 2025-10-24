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
let count = 0 
let countEl = document.getElementById("count") // pass in argument
function incrementCount() {
    count += 1
    countEl.innerText = count
    console.log(count)
}

// console.log(countEl)