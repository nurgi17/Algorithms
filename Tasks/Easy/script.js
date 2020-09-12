// 1480. Running Sum of 1d Array –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var runningSum = function(nums) {
//   let count = 0
//   return nums.map(num => {
//     return count+=num
//   })
// }
// 1480. Running Sum of 1d Array END –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// var nums = [1,1,1,1,1]
// console.log(runningSum(nums))

// 1431. Kids With the Greatest Number of Candies ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// Array.prototype.max = function() {
//   return Math.max.apply(null, this)
// }

// var kidsWithCandies = function(candies, extraCandies) {
//   const max = candies.max()
//   return candies.map(candy => {
//     if ((candy + extraCandies) >= max) return true
//     return false
//   })
// }
// var candies = [4,2,1,1,2]
// var extraCandies = 1

// console.log(kidsWithCandies(candies, extraCandies))
// 1431. Kids With the Greatest Number of Candies END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 7. Reverse Integer ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
var reverse = function(x) {
  let reverse = ''
  const sign = Math.sign(x)
  let num = Math.abs(x)
  let len = num.toString().length
  let percent = 0
  for (let i = 0; i < len; i++) {
    percent = num % 10
    reverse += percent
    num = Math.round((num / 10) - (percent / 10))
  }
  if (sign === -1) {
    reverse = '-' + reverse
    if (reverse < Math.pow(-2, 31)) return 0
    return Number.parseInt(reverse)
  }
  if (reverse > Math.pow(2, 31)) return 0
  return Number.parseInt(reverse)
}

console.log(reverse(-123))
// 7. Reverse Integer END –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––