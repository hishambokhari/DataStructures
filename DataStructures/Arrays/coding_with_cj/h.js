// You will be given an array (a) and a value (x). All you need to do is check whether the provided array contains the value, without using a loop.

// Array can contain numbers or strings. X can be either. Return true if the array contains the value, false if not. With strings you will need to account for case.

// function check(a,x){
//   if(a.includes(x)){
//     return true
//   } else {
//     return false
//   }
// };
// console.log(check([66,101], 66))

// Test.describe("Basic tests",_=>{
//   Test.assertEquals(check([66, 101], 66), true);
//   Test.assertEquals(check([80, 117, 115, 104, 45, 85, 112, 115], 45), true);
//   Test.assertEquals(check(['t', 'e', 's', 't'], 'e'), true);
//   Test.assertEquals(check(['what', 'a', 'great', 'kata'], 'kat'), false);
//   })

// Complete the solution so that it reverses the string passed into it.

// 'world'  =>  'dlrow'

function solution(str){
  return str.split('').reverse().join('')
}
console.log(solution("hello"))
// Test.assertEquals(solution('world'), 'dlrow')
// Test.assertEquals(solution('hello'), 'olleh')
// Test.assertEquals(solution(''), '')
// Test.assertEquals(solution('h'), 'h')