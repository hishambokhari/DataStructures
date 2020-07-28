var findJudge = function(N, trust) {
  let trustCounts = new Array(N + 1).fill(0);

  for(let [i,j] of trust){
    trustCounts[i] -= 1;
    trustCounts[j] += 1;
  } 
  for(let i = 1; i < trustCounts.length; i++){
    if(trustCounts[i] === N - 1){
      return i;
    }
  }

  return -1;
};

console.log(findJudge(4, [1,3],[1,4],[2,3],[2,4],[4,3]))