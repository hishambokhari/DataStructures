// function findFactorialIterative(number){
//   let answer = 1;
//   if (number === 2){
//     answer = 2
//   }
//   for(let i=1; i<= number;i++){
//     answer = answer*i
//   }
//   return answer
// }
// console.log(findFactorialIterative(5))

// function findFactorialRecursive(number){
//   if (number === 2){
//     return 2
//   }
//   return number * findFactorialRecursive(number-1);
// }
// console.log(findFactorialRecursive(5))



function fibonacciIterative(n){

  let array = [0,1]

  for(let i = 2; i < n + 1; i++){
    array.push(array[i-2]+ array[i-1])
  }
  return array[n]

}
console.log(fibonacciIterative(8))




// function fibonacciRecursive(n){
//   if(n < 2){
//     return n;
//   }
//   return fibonacciRecursive(n-1) + fibonacciRecursive(n-2)
// }
// console.log(fibonacciRecursive(8))