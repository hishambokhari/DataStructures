// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// function sumMix(x){
//   let y = x.toString().split(',').map(Number)
//   let sum = y.reduce(function(a,b){return a+b},0)
//   return sum
// }
// console.log(sumMix([9, 3, '7', '3']))
// Test.describe("Example tests",_=>{
//   Test.assertEquals(sumMix([9, 3, '7', '3']), 22);
//   Test.assertEquals(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 42); 
//   Test.assertEquals(sumMix(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 41);
//   });

//q2

// function squareSum(numbers){
//   let sum = [];
  
//   for(let i =0; i < numbers.length; i++){
//     sum.push(numbers[i]**2)
//   }
//   return sum.reduce(function(a,b){return a+b},0)
// }

// console.log(squareSum([0,3,4,5]))

//q3

// You must implement a function maxDiff that return the difference between the biggest and the smallest value in a list(lst) received as parameter.

// The list(lst) contains integers, that means it may contain some negative numbers.

// If the list is empty or contains a single element, return 0.

// The list(lst) is not sorted.

// function maxDiff(list) {

//   if(list == [] || list < 2){
//     return 0
//   }
  
//     let sortedList = list.sort(function(a,b){return a-b})
//     let firstVal = sortedList[0]
//     let lastVal = sortedList[list.length -1]
//     let maximumDiff = lastVal - firstVal
//     return maximumDiff

// };
// console.log(maxDiff([16]))
// Test.describe('Basic tests', function() {

//   Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
//   Test.assertEquals(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
//   Test.assertEquals(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
//   Test.assertEquals(maxDiff([16]), 0);
//   Test.assertEquals(maxDiff([]), 0);

// });