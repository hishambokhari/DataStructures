function howMuchILoveYou(nbPetals) {
  let petals = ['I love you', 'a little', 'a lot', 'passionately', 'madly', 'not at all'];
  return petals[(nbPetals-1) % 6];
}
console.log(howMuchILoveYou(7))


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