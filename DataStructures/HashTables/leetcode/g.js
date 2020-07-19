// If you can't sleep, just count sheep!!

// Task:
// Given a non-negative integer, 3 for example, return a string with a murmur: "1 sheep...2 sheep...3 sheep...". Input will always be valid, i.e. no negative integers.

const countSheep = function (num) {
  
  let arr = '';

  for (let i = 1; i <= num; i++){
    arr +=  `${i} sheep...`
  }
  return arr;
}
console.log(countSheep(2))

// Test.assertEquals(countSheep(1), "1 sheep...");
// Test.assertEquals(countSheep(2), "1 sheep...2 sheep...");
// Test.assertEquals(countSheep(3), "1 sheep...2 sheep...3 sheep...");