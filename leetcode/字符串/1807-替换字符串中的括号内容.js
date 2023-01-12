var evaluate = function(s, knowledge) {
  const map = new Map(knowledge);
  let curSubStr = '';
  let newStr = '';
  let startMatch = false;
  for (let i = 0; i < s.length; i++) {
    const char = s.charAt(i);
    if(char === '(') {
      curSubStr = '';
      startMatch = true;
    } else if(char === ')') {
      newStr += map.get(curSubStr) ?? '?';
      startMatch = false;
    } else if (!startMatch) {
      newStr += char;
    } else {
      curSubStr += char;
    }
  }
  return newStr;
};

// const result = evaluate('(name)is(age)yearsold', [["name","bob"],["age","two"]]); // bobistwoyearsold
// const result = evaluate('hi(name)', [["a","b"]]); // hi?
const result  = evaluate('(a)(a)(a)aaa', [["a","yes"]]); // yesyesyesaaa

console.log(result);