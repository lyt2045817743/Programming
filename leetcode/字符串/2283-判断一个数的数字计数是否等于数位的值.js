var digitCount = function(num) {
  const arr = new Array(num.length).fill(0);
  for (let i = 0; i < num.length; i++) {
    arr[num.charAt(i)] ++;
  }
  console.log(arr.join(''), arr, num);
  return arr.join('') === num;
};

// const result = digitCount('1210'); // true
const result = digitCount('030'); // false
console.log(result);