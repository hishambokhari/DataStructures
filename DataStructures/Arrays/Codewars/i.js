// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

// Example:
// 348597 => [7,9,5,8,4,3]

function digitize(n) {
  
  return String(n).split('').map(Number).reverse()
     
  // let x = Array.from(String(revArr), Number);
 
}
console.log(digitize(45762893920))
// Test.assertDeepEquals(digitize(35231),[1,3,2,5,3]);
