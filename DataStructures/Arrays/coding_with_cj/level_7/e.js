// // var stringToNumber = function(str){
// //   return parseFloat(str)
// // }
// // console.log(stringToNumber("1234"))

// // describe( "stringToNumber", function(){
// //   it( "should work for the examples" , function(){
// //     Test.assertEquals(stringToNumber("1234"),1234)
// //     Test.assertEquals(stringToNumber("605"), 605)
// //     Test.assertEquals(stringToNumber("1405"),1405)
// //     Test.assertEquals(stringToNumber("-7"),  -7)
// //   });
// // });

// Write a function that will compare two values, one will be a number and one will be a string. Return true if they are the same character (regardless of their different data types) and return false if they are not.

// To make this challange harder and to promp the challenger to read up about coercion I have disabled some of the built in methods including .toString(), .join(), .split(), parseInt and .Number().

function add(a, b){
  if (a.toString() === b || a === b.toString()){
    return true
  } else {
    return false
  }
  
}
console.log(add(1,'1'))


// Test.assertEquals(add('1', 1), true);
// Test.assertEquals(add(1, '1'), true);
// Test.assertEquals(add(1, '0'), false);
// Test.assertEquals(add('11', 11), true);
// Test.assertEquals(add(12, 12), true);
// Test.assertEquals(add(120, '021'), false);