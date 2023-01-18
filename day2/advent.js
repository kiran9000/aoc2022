const fs = require('fs')
var input = fs.readFileSync('input.txt', {
    encoding: 'utf-8',
    flag: 'r'
})
var choices = [
    { option: 1, beats: 3, loses: 2},
    { option: 2, beats: 1, loses: 3},
    { option: 3, beats: 2, loses: 1}
]
var finalScore1 = 0;
var finalScore2 = 0;
var roundsArray = input.split('\n')
roundsArray = roundsArray.filter(n => n)
// part 1
for (i = 0; i < roundsArray.length; i++) {
    childRoundsArray = roundsArray[i].split(' ')
    var opponent_choice = choices[parseInt(childRoundsArray[0], 36) - 10]
    var your_choice = choices[parseInt(childRoundsArray[1], 36) - 33]
    var roundOutcome = outcome(your_choice, opponent_choice)
    finalScore1 += your_choice.option + roundOutcome
}

function outcome(choice1, choice2) {
    if (choice1.beats == choice2.option) return 6
    if (choice2.beats  == choice1.option) return 0
    else return 3
}

console.log(`final score for part 1: ${finalScore1}`)


// part 2
for (i = 0; i < roundsArray.length; i++) {
    childRoundsArray = roundsArray[i].split(' ')
    var opponent_choice = choices[parseInt(childRoundsArray[0], 36) - 10]
    var roundOutcome = (parseInt(childRoundsArray[1], 36) - 33) * 3
    var your_choice = getChoiceFromOutcome(opponent_choice, roundOutcome)
    finalScore2 += your_choice + roundOutcome;
}
function getChoiceFromOutcome(choice, outcome) {
    if (outcome == 0) return choice.beats
    if (outcome == 3) return choice.option
    if (outcome == 6) return choice.loses
}

console.log(`final score for part 2: ${finalScore2}`)
