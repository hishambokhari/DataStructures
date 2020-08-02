// Binary Search Practice


let array = [3,4,6,2,3,645,2,3,6,83,78,13];


function search(arr, value){
  let high = arr.length - 1
  let mid = 0
  let low = 0

  while (low <= high){
    mid = Math.floor((high+low)/2)
    if( arr[mid] == value){
      return arr[mid]
    } else if (value > arr[mid]){
      low = mid + 1
    }else {
       high = mid - 1
    }
  }
  return -1;
}

let sorted = array.sort(function(a,b){return a - b})


let findTheValue = search(sorted, 78)
console.log(findTheValue)