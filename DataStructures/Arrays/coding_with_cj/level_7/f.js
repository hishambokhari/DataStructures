// // Given an array of integers.

// // Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers.

// // If the input array is empty or null, return an empty array.

// For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

function countPositivesSumNegatives(input) {
  if (input == null || input.length == 0)
    return [];
  
  let final = []
  let sumOfNeg = []
  let countOfPos = []
  for (let i = 0; i < input.length; i++){
    if(input[i] > 0){
     countOfPos.push(input[i])
    }
    if(input[i] < 0){
      sumOfNeg.push(input[i])
    }
  }
  let finalCount = countOfPos.length
  let secElement = sumOfNeg.reduce(function(a,b){return a + b}, 0)
  final.push(finalCount,secElement)
  return final
}

console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))  //should return [10, -65].



