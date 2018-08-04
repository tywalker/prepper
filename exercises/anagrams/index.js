// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function first_anagrams(stringA, stringB) {
  let rawA = stringA.replace(/[^\w]/g, "");
  let rawB = stringB.replace(/[^\w]/g, "");
  let sortedA = rawA.split('').sort().join('').toLowerCase();
  let sortedB = rawB.split('').sort().join('').toLowerCase();

  return sortedA === sortedB;
}

function anagrams(stringA, stringB) {
  let argArr = [...arguments];
  let raw = argArr.map( arg => arg.replace(/[^\w]/g, '') );
  let sorted = raw.map( str => str.split('').sort().join('').toLowerCase() );

  let matches = true;
  sorted.map( str => matches = sorted[0] === str );
  return matches;
}

module.exports = anagrams;
