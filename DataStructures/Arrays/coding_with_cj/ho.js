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

function squareSum(numbers){
  let sum = [];
  
  for(let i =0; i < numbers.length; i++){
    sum.push(numbers[i]**2)
  }
  return sum.reduce(function(a,b){return a+b},0)
}

console.log(squareSum([0,3,4,5]))