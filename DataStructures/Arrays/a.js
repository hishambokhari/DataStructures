// create a function that reverses a string:
// 'Hi My name is Andrei' should be:
// 'ierdnA si eman yM iH'

function reverse(str){
  // check input
  if (!str || str.length < 2 || typeof str !== 'string'){
    return 'not good'
  } 
  const backward = [];
  const itemLength = str.length - 1;

  for(let i = itemLength;i >= 0;i--){
    backward.push(str[i]);
  } 
  return backward.join('');

}


console.log(reverse('Hi My name is Andrei'))

// Practice 
// reverse a string 'yo man how are you'
// check for edge cases too

function reverse(str){
  if (!str || str.length < 2){
    return 'Not possible'
  }
  const reverseStr = [];
  const itemLength = str.length - 1;

  for(i = itemLength; i >= 0;i--){
    reverseStr.push(str[i])
  }
  return reverseStr.join('')
}
console.log(reverse('yo man how are you'))

