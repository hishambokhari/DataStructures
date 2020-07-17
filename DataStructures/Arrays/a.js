//create a function that reverses a string:
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