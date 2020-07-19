// Sentence Smash
// Write a function that takes an array of words and smashes them together into a sentence and returns the sentence. You can ignore any need to sanitize words or add punctuation, but you should add spaces between each word. Be careful, there shouldn't be a space at the beginning or the end of the sentence!

// Example
// ['hello', 'world', 'this', 'is', 'great']  =>  'hello world this is great'

function smash (words) {
  "use strict";
  let arr = words;

  return arr.join(" ")
  
  
};
console.log(smash(['hello',"world"]))

// Test.assertEquals(smash(["hello"]), "hello");
// Test.assertEquals(smash(["hello", "world"]), "hello world");