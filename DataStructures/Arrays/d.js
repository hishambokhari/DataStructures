// Reversing Arrays

function reverse(str){
  if (typeof str !== 'string' || str.length < 2 ){
    return 'Invalid Input'
  }

  const arr = str.split('') // splits the arr every character
  const n = arr.length - 1
  const result = []

  // reverse itterate through

  for(let i = n; i >= 0; i--){
    result.push(arr[i])
  }

  return result.join('')
}
const str = '12345'
console.log(reverse(str))