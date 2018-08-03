// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function first_reverse(str) {
  let strArr = str.split("");
  let revStr = "";

  for (var i = strArr.length - 1; i >= 0; i--) {
    revStr += strArr[i];
  }

  return revStr;
}

function second_reverse(str) {
  let strArr = str.split("");
  let revArr = strArr.reverse();
  let revStr = "";

  revArr.map( x => revStr += x);

  return revStr;
}

function third_reverse(str) {
  let revStr = "";

  str.split("").reverse().map( x => revStr += x );

  return revStr;
}

function final_reverse(str) {
  let revStr = "";

  for (let i of str) { revStr = i + revStr }

  return revStr;
}

function reverse(str) {
  let strArr = str.split("");

  return strArr.reduce( (acc, cur) => acc = cur + acc, "")
}

module.exports = reverse;
