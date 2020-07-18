function solve(arr){

  for(let i = 0;i < arr.length;i++){
    if(!arr.includes(-1 * arr[i]))
    return arr[i]
  }
};

console.log(solve([1, -1, 2, -2, 3]))