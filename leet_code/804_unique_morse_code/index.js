const transformToMorseCode = (words) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let mapped = {};

  alphabet.map( (letter, i) => mapped[letter] = morse[i] );

  return words.map( (word) => {
    let arr = word.split('');
    let morse = "";

    return arr.reduce( (acc, cur) => acc += mapped[cur], "");
  }).length;
}

let words = ["hello", "goodbye", "hi", "whattheforshizzle"];

console.log(transformToMorseCode(words))
module.exports = transformToMorseCode;
