// function howMuchILoveYou(nbPetals) {
//   let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
//   return petals[(nbPetals-1) % 6];
// }
// console.log(howMuchILoveYou(7))


// Test.describe("howMuchILoveYou",function() {
//   Test.it("Basic tests",function() { 
//       testing(howMuchILoveYou(7),"I love you")
//       testing(howMuchILoveYou(3),"a lot")
//       testing(howMuchILoveYou(6),"not at all")
// })})

// I love you
// a little
// a lot
// passionately
// madly
// not at all

function findNeedle(haystack) {
  for(let i = 0; i < haystack.length; i++){
    if (haystack[i] === "needle"){
      return "found the needle at position " + i
    }
  }
}
console.log(findNeedle(['3', '123124234', undefined, 'needle', 'world', 'hay', 2, '3', true, false]))