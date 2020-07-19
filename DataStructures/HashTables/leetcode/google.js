// Google question
//Given an array = [2,5,1,2,3,5,1,2,4];
//It shoulf return 2

// Given an array = [2,1,1,2,3,5,1,2,4];
// It should return 1

// Given an array = [2,3,4,5];
//It should return undefined.

//Solution

// function firstRecurringChar(input){
//   for(let i=0;i < input.length; i++){
//     for(let j= i+1; j < input.length; j++){
//       if(input[i] !== input[j]){
//         return input[i];
//       }
//     }
//   }
//   return undefined;
// }

function firstRecurringChar(input){
  let map = {};
  for(i = 0;i < input.length;i++){
    if (map[input[i]] !== undefined){
      return input[i]
    } else {
      map[input[i]] = i
    }
  }
  return undefined;
}

console.log(firstRecurringChar([2,5,5,2,3,5,1,2,4]))