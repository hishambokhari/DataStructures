// Welcome. In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

  function squareDigits(num){
    
  let arr = num.toString().split('').map(Number)
  let newArr = []

  for (let i =0; i < arr.length;i++){
    newArr.push(arr[i]**2)
  }
  return parseFloat(newArr.toString().replace(/,/g,''))
    
  }
console.log(squareDigits(9119))
// Test.assertEquals(squareDigits(9119), 811181);
