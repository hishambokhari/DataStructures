// // You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// // As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// // For example:

// // monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// // monkeyCount(1) // --> [1]

// // function monkeyCount(n) {
// //   let final = []

// //   for (let i = n; i > 0; i--){
// //     final.push(i)
// //   }
// //   return final.reverse()
// // }
// // console.log(monkeyCount(5))

//   // Test.describe("monkeyCount", _ => {
//   //   Test.assertSimilar((monkeyCount(5)), [1, 2, 3, 4, 5]);
//   //   Test.assertSimilar((monkeyCount(3)), [1, 2, 3]);
//   //   Test.assertSimilar((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
//   //   Test.assertSimilar((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
//   //   Test.assertSimilar((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
//   // });

// //   function noSpace(x){
    
// //     let y = x.replace(/ /g, "")
// //     return y
// //   }
// // console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))
//   // Test.describe("Example tests",_=>{
//   //   Test.assertEquals(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
//   //   Test.assertEquals(noSpace('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd'); 
//   //   Test.assertEquals(noSpace('8aaaaa dddd r     '), '8aaaaaddddr'); 
//   //   });

//   For every good kata idea there seem to be quite a few bad ones!

// In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. If there are no good ideas, as is often the case, return 'Fail!'.

function well(x){
  let good  = 0

  for (let i = 0; i < x.length; i++){
    if(x[i] == 'good' && ++good > 2)
    return 'I smell a series!'

    return good ? 'Publish' : 'Fail!'
  }
}
console.log(well(['good', 'bad', 'bad']))
// Test.describe("Example tests",_=>{
//   Test.assertEquals(well(['bad', 'bad', 'bad']), 'Fail!');
//   Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
//   Test.assertEquals(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
//   });