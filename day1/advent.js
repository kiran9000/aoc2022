const fs = require('fs')
var all_sum = []
var input = fs.readFileSync('input.txt', {
    encoding: 'utf-8',
    flag: 'r'
})

var caloriesArray = input.split("\r\n\r\n");
caloriesArray = caloriesArray.filter(n => n)

// part 1
for (i = 0; i < caloriesArray.length; i++) {
    var childCaloriesArray = caloriesArray[i].split("\n")
    var sum = 0;
    for (j = 0; j < childCaloriesArray.length; j++) {
        sum += parseInt(childCaloriesArray[j]);
    }
    all_sum.push(sum)
}
all_sum.sort(function (a, b) { return b - a }) // sort by descending order
console.log(`highest calories sum: ${all_sum[0]}`)
console.log(`calories sum of top 3 elves: ${all_sum[0]} + ${all_sum[1]} + ${all_sum[2]} = ${all_sum[0] + all_sum[1] + all_sum[2]}`)
