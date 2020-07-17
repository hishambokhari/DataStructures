// Merge sorted Arrays

// mergeSortedArrays([0,3,4,31], [4,6,30]);
// [0,3,4,4,6,30,31]



function mergeAry(a,b) {
  //check input
  if(a.length === 0){
    return b;
  }
  if(b.length === 0){
    return a;
  }

  const newAry = a.concat(b)

  return newAry.sort(function(a,b){return a-b})
}

console.log(mergeAry([0,3,4,31],[4,6,30]))