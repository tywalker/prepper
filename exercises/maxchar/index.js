// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let map = {};
  str.split('').map( (cur) => {
    map[cur]
      ? map[cur] += 1
      : map[cur] = 1;
  });

  let keys = Object.keys(map);
  let values = Object.values(map);
  let max = Math.max(...values);
  let answer = null;

  keys.map( key => {
    if (map[key] === max) {
      answer = key
    }
  });

  return answer;
}

module.exports = maxChar;
