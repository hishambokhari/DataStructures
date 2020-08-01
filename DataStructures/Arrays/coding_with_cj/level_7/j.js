// Your task is to write a function, which takes two arguments and returns a sequence. First argument is a sequence of values, second is multiplier. The function should filter all non-numeric values and multiply the rest by given multiplier.

function multiplyAndFilter(array){

 return array.filter((a)=> {return a !== 2})
}
console.log(multiplyAndFilter([1,2,3,4,2,6,2,5,2]))
// Test.assertSimilar(multiplyAndFilter([1,2,3,4], 1.5), [1.5, 3, 4.5, 6]);
// Test.assertSimilar(multiplyAndFilter([1,2,3], 0), [0, 0, 0]);
// Test.assertSimilar(multiplyAndFilter([0,0,0], 2), [0, 0, 0]);
// Test.assertSimilar(multiplyAndFilter([1, null, function(){}, 2.5, 'string', 10, undefined, {}, []], 3), [3,7.5,30]);