// // // var stringToNumber = function(str){
// // //   return parseFloat(str)
// // // }
// // // console.log(stringToNumber("1234"))

// // // describe( "stringToNumber", function(){
// // //   it( "should work for the examples" , function(){
// // //     Test.assertEquals(stringToNumber("1234"),1234)
// // //     Test.assertEquals(stringToNumber("605"), 605)
// // //     Test.assertEquals(stringToNumber("1405"),1405)
// // //     Test.assertEquals(stringToNumber("-7"),  -7)
// // //   });
// // // });

// // Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// // To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

// // function add(a, b){
// //   if (a.toString() === b || a === b.toString()){
// //     return true
// //   } else {
// //     return false
// //   }
  
// // }
// // console.log(add(1,'1'))


// // Test.assertEquals(add('1', 1), true);
// // Test.assertEquals(add(1, '1'), true);
// // Test.assertEquals(add(1, '0'), false);
// // Test.assertEquals(add('11', 11), true);
// // Test.assertEquals(add(12, 12), true);
// // Test.assertEquals(add(120, '021'), false);

// Write function parseFloat (for Javascript parseF) which takes a string and returns a number or Nothing (for Python None, for Javascript null) if conversion is not possible.


// function parseF(s) {

//   if (isNaN(parseFloat(s))) {
//      return  null
//    } else {
//     return parseFloat(s)
//    }
// }
// console.log(parseF("0"))
// Test.assertEquals(parseF("1"), 1.0);

// function repeatStr (n, s) {
//   return s.repeat(n)
// }
// console.log(repeatStr(3, "h"))

// function solution(a, b){
  
//   if ( a.length < b.length ){
//     return a+b+a
//   }
//   if (b.length < a.length){
//     return b+a+b
//   }

// }
// console.log(solution('U', 'False'))
// describe("Sample tests", function() {
//   it("Should pass sample tests", function() {
//     Test.assertEquals(solution('45', '1'), '1451');
//     Test.assertEquals(solution('13', '200'), '1320013');
//     Test.assertEquals(solution('Soon', 'Me'), 'MeSoonMe');
//     Test.assertEquals(solution('U', 'False'), 'UFalseU');
//   });
// });

function litres(time) {
  let perHour = 0.5
  let result = Math.floor(time * 0.5)
  return result
}
console.log(litres(1787))