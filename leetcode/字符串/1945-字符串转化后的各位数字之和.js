var getLucky = function(s, k) {
    let result;
    while(k > 0) {
      const isChar = s.charAt(0) > '9';
      if(isChar) {
        result = ''
      } else {
        result = 0;
        k--;
      }

      for (let i = 0; i < s.length; i++) {
        result += isChar ? s.charAt(i).charCodeAt() - 'a'.charCodeAt() + 1 : Number(s.charAt(i));
      }

      s = String(result);
    }

    return result;
};

// const result = getLucky('iiii', 1); // 36
const result = getLucky('leetcode', 2); // 6
console.log(result);