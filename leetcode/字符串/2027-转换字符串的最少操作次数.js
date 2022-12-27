var minimumMoves = function(s) {
  let i = 0;
  let count = 0;
  while(i < s.length) {
    if (s.charAt(i) === 'X') {
      count ++;
      i+=3;
    } else {
      i++;
    }
  }
  return count;
};

// const s = "XXX"; // 1
// const s = "XXOX"; // 2
const s = "OOOO"; // 0
const result = minimumMoves(s);
console.log(result);