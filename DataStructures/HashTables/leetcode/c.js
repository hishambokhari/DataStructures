// Given a non-empty array of integers, every element appears twice except for one. Find that single one.

// Note:

// Your algorithm should have a linear runtime complexity. Could you implement it without using extra memory?

// Example 1:

// Input: [2,2,1]
// Output: 1
// Example 2:

// Input: [4,1,2,1,2]
// Output: 4

var singleNumber = function(nums) {
    let set = new Set();

    for(let num of nums){
      if (set.has(num)){
        set.delete(num);
      } else {
        set.add(num);
      }
    }

    return Array.from(set)[0];
};

console.log(singleNumber([2,2,1]))