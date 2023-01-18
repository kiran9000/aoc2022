# Solution
## Part 1 + 2
I use `split()` to split each elf into their own element in an array (by separating the double line break `\r\n\r\n`). Using the `filter()` method, I cleared out empty/undefined elements.
Afterwards, I go through each elf and add the number of calories that they brought with them, add the total sum to an array and sort by descending order.

Result:
- The elf with the highest calories is the first element of that array.
- The total calories sum of the 3 highest elves would be the sum of the first 3 elements of that array.
