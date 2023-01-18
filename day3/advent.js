const fs = require('fs')
var input = fs.readFileSync('input.txt', {
    encoding: 'utf-8',
    flag: 'r'
});

var letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
var sum = 0;
var sum2 = 0;
var keys = []
rucksacksArray = input.split("\r\n");
rucksacksArray = rucksacksArray.filter(n => n)

// part 1
for (i = 0; i < rucksacksArray.length; i++) {
    var firstHalf = rucksacksArray[i].slice(0, rucksacksArray[i].length / 2).split('')
    var secondHalf = rucksacksArray[i].slice(rucksacksArray[i].length / 2, rucksacksArray[i].length + 1).split('')
    var duplicates = []
    firstHalf.forEach((key) => {
        if (-1 != secondHalf.indexOf(key) && -1 == duplicates.indexOf(key)) duplicates.push(key)
    }, this)
    for (j = 0; j < duplicates.length; j++) {
        sum += (letters.indexOf(duplicates[j]) + 1)
    }
}
console.log(`Sum of priorities for each duplicate item in a rucksack:: ${sum}`)

// part 2
for (i = 0; i < rucksacksArray.length; i += 3) {
    var group = [rucksacksArray[i], rucksacksArray[i + 1], rucksacksArray[i + 2]]
    var firstDuplicated = []
    var duplicates = []
    group[0].split('').forEach((key) => {
        if (group[1].indexOf(key) != -1 && firstDuplicated.indexOf(key) == -1) firstDuplicated.push(key)
    })
    firstDuplicated.forEach((key) => {
        if (group[2].indexOf(key) != -1 && duplicates.indexOf(key) == -1) keys.push(key)
    })
}
for (j = 0; j < keys.length; j++) {
    sum2 += letters.indexOf(keys[j]) + 1
}

console.log(`Sum of priorities of each group's badge is:: ${sum2}`)

