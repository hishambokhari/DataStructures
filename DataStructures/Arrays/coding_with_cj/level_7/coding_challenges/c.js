//Binary Search


let array = [3,4,6,2,3,645,2,3,6,83,23,13];

function binary_search(arr, value){
  let high = arr.length - 1;
  let low = 0;
  let mid = 0;

  while(low <= high){
    mid = Math.floor((high+low)/2)
    if(arr[mid] == value){
      return arr[mid]
    } else if(value > arr[mid]){
      low = mid+1
    } else {
      high = mid - 1
    }
  }
  return -1
}

let sorted = array.sort(function(a,b){return a - b})

let findTheValue = binary_search(sorted, 24)

console.log(findTheValue)




// [ 2, 2, 3, 3, 3, 4, 6, 6, 13, 23, 83, 645 ]