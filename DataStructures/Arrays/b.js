// Merge sorted Arrays

// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]



function mergeAry(a,b) {

  const newAry = a.concat(b)

  return newAry.sort(function(a,b){return a-b})
}

console.log(mergeAry([0,3,4,31],[4,6,30]))