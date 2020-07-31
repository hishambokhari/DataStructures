function sumOfDifferences(arr) {
  if (arr === [] || arr.length < 2){
    return 0
  }
  let final = arr.sort(function(a,b){return a - b}).reverse()
  let firstDiff = final[0] - final[1]
  let latDiff = final[1] - final[arr.length-1]
  return latDiff + firstDiff
  
}

console.log(sumOfDifferences([1,2,10]))