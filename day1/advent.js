const fs = require('fs')
var previous_sum = 0;
var all_sum = []
var input = fs.readFileSync('input.txt', {
    encoding: 'utf-8',
    flag: 'r'
})

var caloriesArray = input.split("\n\n");


// part 1
for (i = 0; i < caloriesArray.length; i++) {
    var childCaloriesArray = caloriesArray[i].split("\n")
    var sum = 0;
    for (j = 0; j < childCaloriesArray.length; j++) {
        sum += parseInt(childCaloriesArray[j]);
    }
    console.log(`prev highest:: ${previous_sum} // current elf:: ${i} // carrying:: ${sum}`)
    if (sum >= previous_sum) { previous_sum = sum; }
}

console.log(`highest calories: ${previous_sum}`)



// part 2
for (i = 0; i < caloriesArray.length; i++) {
    var childCaloriesArray = caloriesArray[i].split("\n")
    var sum = 0;
    for (j = 0; j < childCaloriesArray.length; j++) {
        sum += parseInt(childCaloriesArray[j]);
    }
    all_sum.push(sum);
}
all_sum.sort(function (a, b) { return b - a }) // sort by descending order
console.log(`sum of top 3 elves: ${all_sum[0] + all_sum[1] + all_sum[2]}`)