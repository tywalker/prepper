const transformToMorseCode = (words) => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('')
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let mapped = {};

  alphabet.map( (letter, i) => mapped[letter] = morse[i] );

  let morseArr = words.reduce( (acc, cur, i) => {
    let arr = cur.split('');
    let transformation = (arr.reduce( (inacc, incur) => inacc = inacc + mapped[incur], ""));

    if (acc.indexOf(transformation) === -1) {

      acc.push(transformation)
      return acc;
    }
    else {
      return acc;
    }
  }, []);

  return morseArr.length;
}

const isInArray = (transformation) => {

}

let words = ["gin", "zen", "gig", "msg"];

console.log(transformToMorseCode(words))
module.exports = transformToMorseCode;
