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

function reverse(str) {
  let strArr = str.split("");
  let revArr = strArr.reverse();
  let revStr = "";

  revArr.map( x => revStr += x);

  return revStr;
}

module.exports = reverse;
