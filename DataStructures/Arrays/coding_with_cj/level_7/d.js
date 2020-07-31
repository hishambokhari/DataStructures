// Normally we have firstname, middle and the last name but there may be more than one word in a name like a South Indian one.

// Similar to those kinda names we need to initialize the names.

// See the pattern below:

// initials('code wars') => returns C.Wars 
// initials('Barack Hussain obama') => returns B.H.Obama 

function initials(n){
  let l = n.split('')
  let first = console.log(n[0].toUpperCase())
  for (let i=0; i < n.length; i++){
    
  }

}
console.log(initials('code wars'))
// Test.assertSimilar(initials('code wars'),'C.Wars');
// Test.assertSimilar(initials('Barack hussain obama'),'B.H.Obama');
// Test.assertSimilar(initials('barack hussain Obama'),'B.H.Obama');