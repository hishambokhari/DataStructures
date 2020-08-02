//Recursion

// function factorial(n){
//   if (n == 1 || n == 0){
//     return 1;
//   }
//   return n * factorial(n-1)
// }
// console.log(factorial(2))

//Fibonaci

function fibb(num){
  if(num <= 2){
    return num;
  }
  return fibb(num-1) + fibb(num-2)
}
console.log(fibb(5))