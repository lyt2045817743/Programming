/**
 * @param {string[]} words
 * @param {string} pref
 * @return {number}
 */
 var prefixCount = function(words, pref) {
  let count = 0;
  for(let i = 0; i < words.length; i++) {
    if(words[i].slice(0, pref.length) === pref) {
      count++;
    }
  }
  return count;
};

// const result = prefixCount(["pay","attention","practice","attend"], 'at');
const result = prefixCount(["leetcode","win","loops","success"], 'code');

console.log(result);
