// Take an array and remove every second element out of that array. Always keep the first element and start removing with the next element.

// Example:

// myArr = ['Keep', 'Remove', 'Keep', 'Remove', 'Keep', ...];

function removeEveryOther(arr){
  let ArryNew = []
  for (let i = 0; i < arr.length; i = i+2){
    ArryNew.push(arr[i])
  }
  return ArryNew;
}
console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))

// Test.describe("Basic tests",_=>{
//   Test.assertSimilar(removeEveryOther(['Hello', 'Goodbye', 'Hello Again']),['Hello', 'Hello Again']);
//   Test.assertSimilar(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]),[1, 3, 5, 7, 9]);
//   Test.assertSimilar(removeEveryOther([[1, 2]]), [[1, 2]]);
//   Test.assertSimilar(removeEveryOther([['Goodbye'], {'Great': 'Job'}]),[['Goodbye']]);
//   })