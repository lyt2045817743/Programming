// 第一次
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow1 = function(x, n) {
  if (n === 0) return 1;
  return n < 0 ? (1 / x) * myPow(x, n + 1) : x * myPow(x, n - 1);
};
// let result = myPow1(0.00001, 2147483647); // 不通过 Maximum call stack size exceeded： 当n很大时，栈溢出


// 第二次
/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
 var myPow = function(x, n) {
  if (n === 0) return 1;
  if (n === 1) return x;

  if (n % 2 === 0) {
    const temp = n > 0 ? myPow(x, n / 2) : myPow(1 / x, n / -2);
    return temp * temp;
  } else {
    const temp1 = n > 0 ? myPow(x, (n + 1) / 2) : myPow(1 / x, (n + 1) / -2);
    const temp2 = n > 0 ? myPow(x, (n - 1) / 2) : myPow(1 / x, (n - 1) / -2);
    return temp1 * temp2;
  }
};

// const result = myPow(2, -2);
// const result = myPow(2, -10);
// const result = myPow(0, 1);
// const result = myPow(1, 0);
result = myPow(0.00001, 2147483647);
console.log(result);
