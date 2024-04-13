/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    const set = new Set();
    while (true) {
        const str = String(n);
        let sum = 0;
        for (let i = 0, j = 1; i < str.length; i += 2, j += 2) {
            sum += j === str.length ? Math.pow(+str[i], 2) : Math.pow(+str[i], 2) + Math.pow(+str[j], 2);
        }
        if (sum === 1) {
            return true;
        }
        if (set.has(sum)) {
            return false;
        }
        set.add(sum);
        console.log(sum);
        n = sum;
    }
};


// 编写一个算法来判断一个数 n 是不是快乐数。

// 「快乐数」 定义为：
// 对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
// 然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
// 如果这个过程 结果为 1，那么这个数就是快乐数。
// 如果 n 是 快乐数 就返回 true ；不是，则返回 false 。

 

// 示例 1：
// 输入：n = 19
// 输出：true
// 解释：
// 12 + 92 = 82
// 82 + 22 = 68
// 62 + 82 = 100
// 12 + 02 + 02 = 1
// const n = 19;

// 示例 2：
// 输入：n = 2
// 输出：false
// const n = 2;

// 实例 3：
// const n = 1;

// 实例 4：
const n = 999999999999;

const result = isHappy(n);
console.log(result);