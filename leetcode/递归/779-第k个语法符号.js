/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
 var kthGrammar = function(n, k) {
    if (n === 1) {
      return calcK(0, k % 2 === 1);
    };

    return calcK(kthGrammar(n - 1, k % 2 === 1 ? (k + 1) / 2 : k / 2), k % 2 === 1);
};

var calcK = function(parentVal, isOdd) {
  return isOdd ? parentVal : parentVal === 1 ? 0 : 1;
}

let result;
result = kthGrammar(2, 2);
console.log(result);