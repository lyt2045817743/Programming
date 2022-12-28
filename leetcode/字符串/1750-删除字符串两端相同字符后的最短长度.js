var minimumLength = function(s) {
  while(s.length > 1 && s.charAt(0) === s.charAt(s.length - 1)) {
    let start = 0;
    let end = s.length - 1;
    while(s.charAt(start + 1) === s.charAt(start)) {
      start++
    }
    while(s.charAt(end - 1) === s.charAt(end)) {
      end--;
    }
    s = s.slice(start + 1, end);
  }
  return s.length;
};

const s = 'ca'; // 2
// const s = 'cabaabac'; // 0
// const s = 'aabccabba'; // 3
// const s = 'bbbbbbbbbbbbbbbbbbbbbbbbbbbabbbbbbbbbbbbbbbccbcbcbccbbabbb'; // 1

const result = minimumLength(s);
console.log(result);