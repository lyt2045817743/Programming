var areNumbersAscending = function(s) {
  const arr = s.split(' ');
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    const cur = Number(arr[i]);
    if(!isNaN(cur)) {
      if(max < cur) {
        console.log(max, arr[i], 'max arr[i]');
        max = cur;
      } else {
        return false;
      }
    }
  }
  return true;
};

// const s = "sunset is at 7 51 pm overnight lows will be in the low 50 and 60 s";
// const s = "1 box has 3 blue 4 red 6 green and 12 yellow marbles";
// const s = "hello world 5 x 5";
const s = "4 5 11 26"

const result = areNumbersAscending(s);
console.log(result);