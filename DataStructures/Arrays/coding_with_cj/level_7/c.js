// You take your son to the forest to see the monkeys. You know that there are a certain number there (n), but your son is too young to just appreciate the full number, he has to start counting them from 1.

// As a good parent, you will sit and count with him. Given the number (n), populate an array with all numbers up to and including that number, but excluding zero.

// For example:

// monkeyCount(10) // --> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// monkeyCount(1) // --> [1]

function monkeyCount(n) {
  let final = []

  for (let i = n; i > 0; i--){
    final.push(i)
  }
  return final.reverse()
}
console.log(monkeyCount(5))

  // Test.describe("monkeyCount", _ => {
  //   Test.assertSimilar((monkeyCount(5)), [1, 2, 3, 4, 5]);
  //   Test.assertSimilar((monkeyCount(3)), [1, 2, 3]);
  //   Test.assertSimilar((monkeyCount(9)), [1, 2, 3, 4, 5, 6, 7, 8, 9]);
  //   Test.assertSimilar((monkeyCount(10)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  //   Test.assertSimilar((monkeyCount(20)), [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]);
  // });