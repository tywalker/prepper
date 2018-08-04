// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function first_maxChar(str) {
  let map = {};
  str.split('').map( (cur) => {
    map[cur]
      ? map[cur] += 1
      : map[cur] = 1;
  });

  let keys = Object.keys(map);
  let values = Object.values(map);
  let max = Math.max(...values);
  let answer;

  keys.map( key => {
    if (map[key] === max) {
      answer = key
    }
  });

  return answer;
}

function maxChar(str) {
  let mapped = {};
  str.split('').map( (cur, i) => {
    mapped[cur] ? mapped[cur] += 1 : mapped[cur] = 1;
  })
  let max = Math.max(...Object.values(mapped));
  return Object.keys(mapped).find( key => mapped[key] === max );
}

module.exports = maxChar;
