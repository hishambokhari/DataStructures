// A Narcissistic Number is a positive number which is the sum of its own digits, each raised to the power of the number of digits in a given base. In this Kata, we will restrict ourselves to decimal (base 10).

// For example, take 153 (3 digits):

//     1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
// and 1634 (4 digits):

//     1^4 + 6^4 + 3^4 + 4^4 = 1 + 1296 + 81 + 256 = 1634
// The Challenge:

// Your code must return true or false depending upon whether the given number is a Narcissistic number in base 10.

// Error checking for text strings or other invalid inputs is not required, only valid positive non-zero integers will be passed into the function.

// function narcissistic(value) {
  
//   // find the length of the value
//     const length =  Math.floor(Math.log10(Math.abs(value))) + 1;
//   // each digit takes the power of the length of the value
//     let sum = 0;
//     let digits = value;

//     while (digits > 0) {
//       const digit = digits % 10

//       sum += Math.pow(digit, length);
//       digits = Math.floor(digits/10);
//     }

//     return sum == value
//   // Add the powered valued for the sum
//   // if the sum has a length equal to the length of the initial length
//   // return true  
// }

function narcissistic(value){
 let len = value.toString().length
 let newArr = value.toString().split('')
 let sum = 0;
 for(let i = 0; i < len; i++){
  let parsed = parseInt(newArr[i])
  
  sum+= parsed**len
  
 }  
 if ( sum.toString().length === len){
  return true
} else {
  return false
}
}
console.log(narcissistic(371))
// describe( "Narcissistic Function", function() {
//   it( "should find small numbers are all narcissistic", function() {
//     Test.assertEquals(narcissistic( 7 ), true, "7 is narcissistic" );
//   });
  
//   it( "should find these numbers are narcissistic", function() {
//     Test.assertEquals(narcissistic( 371 ), true, "371 is narcissistic" );
//   });
// });