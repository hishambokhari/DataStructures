// This is a spin off of my first kata. You are given a list of character sequences as a comma separated string.
//  Write a function which returns another string containing all the character sequences except the first and the last ones, separated by spaces.
//   If the input string is empty, or the removal of the first and last items would cause the string to be empty, return a null value.

function array(arr){
    newArr = arr.split(',')
    newArr.pop()
    newArr.shift()
    
    return newArr.length ? newArr.join(' ') : null;
  }
console.log(array("1,2,3"))
  // Test.describe("Tests", function(){

  //   Test.assertEquals(array(''), null);
  //   Test.assertEquals(array('1'), null);
  //   Test.assertEquals(array('1, 3'), null);
  //   Test.assertEquals(array('1,2,3'), '2');
      
  //   });