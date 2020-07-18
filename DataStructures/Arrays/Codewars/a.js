// Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'.
//  Return the resulting string.

function fakeBin(str){

  let newStr = "";
  for(let i = 0;i<str.length;i++){
    if(Number(str[i]) >= 5){
      newStr += '1'
    } else {
      newStr += '0'
    }
  }
  return newStr
}

console.log(fakeBin([1,2,3,6,7,8]))


// Test.describe("Example tests",_=>{
//   Test.assertEquals(fakeBin('45385593107843568'), '01011110001100111');
//   Test.assertEquals(fakeBin('509321967506747'), '101000111101101'); 
//   Test.assertEquals(fakeBin('366058562030849490134388085'), '011011110000101010000011011'); 
//   });