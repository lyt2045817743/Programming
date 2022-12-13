// 方法一：数组
var checkIfPangram1 = function(sentence) {
  if(sentence.length < 26) return false;

  const arr = new Array(26);
  for(let i = 0; i < sentence.length; i++) {
    const curCharIdx = sentence.charAt(i).charCodeAt() % 97;
    if (arr[curCharIdx]) {
      arr[curCharIdx]++
    } else {
      arr[curCharIdx] = 1;
    }
  }
  return !arr.includes(undefined);
};

// 方法二：利用集合特性
var checkIfPangram = function(sentence) {
  return Array.from(new Set(sentence)).length === 26;
};


// const str = 'thequickbrownfoxjumpsoverthelazydog' // true
const str = 'leetcode' // false
const result = checkIfPangram(str);
console.log(result);