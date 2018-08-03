let words = ["gin", "zen", "gig", "msg"];

const transformToMorseCode = (words) => {
  let mapped = makeMap();

  let morseArr = words.reduce( (acc, cur, i) => {
    let arr = cur.split('');

    let transformation = generateTransformation(arr);

    addTransformation(acc, transformation);
  }, []);

  return morseArr.length;
}

const makeMap = () => {
  let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let morse = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
  let mapped = {};

  alphabet.map( (letter, i) => mapped[letter] = morse[i] );

  return mapped;
}

const generateTransformation = (arr) =>  {
  return arr.reduce( (inacc, incur) => inacc = inacc + mapped[incur], ""));
}

const addTransformation = (wordArr, transformation) => {
  if (wordArr.indexOf(transformation)) {
    wordArr.push(transformation);

    return wordArr;
  }
  else {
    return wordArr;
  }
}

console.log(transformToMorseCode(words))
module.exports = transformToMorseCode;
