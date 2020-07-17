// Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.

// Example:

// Input: [-2,1,-3,4,-1,2,1,-5,4],
// Output: 6
// Explanation: [4,-1,2,1] has the largest sum = 6.
// Follow up:

// If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.



//sort the array
// find the largest integer in the array
// find the second largest integer in the array
// add the two values

// Input: [-2,1,-3,4,-1,2,1,-5,4]

// function maxSubAry(nums){
//   let sortedAry = nums.sort(function(a,b){return a-b});
  
//   let lastEl = sortedAry[sortedAry.length-1] // gets the last element of the array, also the max element of the array
//   let secLastEl = sortedAry[sortedAry.length-2] // gets the second last element of the array
//   let max = Math.max(lastEl + secLastEl)
//   return max 
// }

function maxSubArray(nums) {
  let maxCurrent = nums[0];
  let maxGlobal = nums[0];

  for(i=1;i < nums.length;i++){
    maxCurrent = Math.max(nums[i], maxCurrent + nums[i]);
  
    if(maxCurrent > maxGlobal){
    maxGlobal = maxCurrent;
  
    }
  }
  return maxGlobal
}
console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))

//contiguous subarray
