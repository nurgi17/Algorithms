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
// var reverse = function(x) {
//   let reverse = ''
//   const sign = Math.sign(x)
//   let num = Math.abs(x)
//   let len = num.toString().length
//   let percent = 0
//   for (let i = 0; i < len; i++) {
//     percent = num % 10
//     reverse += percent
//     num = Math.round((num / 10) - (percent / 10))
//   }
//   if (sign === -1) {
//     reverse = '-' + reverse
//     if (reverse < Math.pow(-2, 31)) return 0
//     return Number.parseInt(reverse)
//   }
//   if (reverse > Math.pow(2, 31)) return 0
//   return Number.parseInt(reverse)
// }

// console.log(reverse(-123))
// 7. Reverse Integer END –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1470. Shuffle the Array ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var shuffle = function(nums, n) {
//   var arr = []
//   for (let i = 0; i < n; i++) {
//     arr.push(nums[i], nums[n + i])
//   }
//   return arr
// }
// var nums = [2,5,1,3,4,7]
// var n = 3
// console.log(shuffle(nums, n))
// 1470. Shuffle the Array END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1512. Number of Good Pairs –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var numIdenticalPairs = function(nums) {
//   let count = 0
//   for (let i = 0; i < nums.length; i++) {
//       for (let j = 0; j < nums.length; j++) {
//           if (nums[i] == nums[j] && i < j) {
//               count++
//           }
//       }
//   }
//   return count
// }
// var nums = [1,1,1,1]
// console.log(numIdenticalPairs(nums))
// 1512. Number of Good Pairs END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1108. Defanging an IP Address –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var defangIPaddr = function(address) {
//   return address.replace(/\./g, '[.]')
// }
// var address = '1.1.1.1'
// console.log(defangIPaddr(address))
// 1108. Defanging an IP Address END –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 771. Jewels and Stones ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var numJewelsInStones = function(J, S) {
//   let count = 0
//   for (let i = 0; i < S.length; i++) {
//     if (J.includes(S[i])) count++
//   }
//   return count
// }

// var J = 'aA', S = 'aAAbbbb'
// console.log(numJewelsInStones(J,S))
// 771. Jewels and Stones END ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1342. Number of Steps to Reduce a Number to Zero ––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var numberOfSteps  = function(num) {
//   let count = 0
//   while (num != 0) {
//     if (num % 2 == 0) {
//       num /= 2
//       count++
//     } else {
//       num -= 1
//       count++
//     }
//   }
//   return count
// }
// var num = 123
// console.log(numberOfSteps(num))
// 1342. Number of Steps to Reduce a Number to Zero END––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––

// 1528. Shuffle String –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––
// var restoreString = function(s, indices) {
//   let res = ''
//   for (let i = 0; i < indices.length; i++) {
//     res += s[indices.indexOf(i)];
//   }
//   return res
// }
// var s = "codeleet", indices = [4,5,6,7,0,2,1,3]
// console.log(restoreString(s, indices))
// 1528. Shuffle String END –––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––––