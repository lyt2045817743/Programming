/**
 * @param {string} key
 * @param {string} message
 * @return {string}
 */
var decodeMessage = function(key, message) {
  const charMap = new Map();
  let curChar = 'a';
  let result = '';
  for(let i = 0; i < key.length; i++) {
    if( key[i] !== ' ' && !charMap.has(key[i])) {
      charMap.set(key[i], curChar);
      curChar = String.fromCharCode(curChar.charCodeAt() + 1);
    }
  }
  for(let i = 0; i < message.length; i++) {
    if(message[i] === ' ') {
      result += ' ';
    } else {
      result += charMap.get(message[i]);
    }
  }
  return result
};

// const result = decodeMessage('the quick brown fox jumps over the lazy dog', 'vkbs bs t suepuv'); // this is a secret
const result = decodeMessage('eljuxhpwnyrdgtqkviszcfmabo', 'zwx hnfx lqantp mnoeius ycgk vcnjrdb'); // the five boxing wizards jump quickly
console.log(result);
