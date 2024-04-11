/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const map = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000
    };
    let result = 0, j = 1;
    for (let i = 0; i < s.length; i++, j = i + 1) {
        if (i === s.length - 1 || map[s[i]] >= map[s[j]]) {
            result += map[s[i]];
        } else {
            result += map[s[j]] - map[s[i]];
            i++;
        }
    };
    return result;
};

// https://leetcode.cn/problems/roman-to-integer/description/

// 示例 1:
// 输入: s = "III"
// 输出: 3
const s = "III";

// 示例 2:
// 输入: s = "IV"
// 输出: 4
// const s = "IV";

// 示例 3:
// 输入: s = "IX"
// 输出: 9
// const s = "IX";

// 示例 4:
// 输入: s = "LVIII"
// 输出: 58
// 解释: L = 50, V= 5, III = 3.
// const s = "LVIII";

// 示例 5:
// 输入: s = "MCMXCIV"
// 输出: 1994
// 解释: M = 1000, CM = 900, XC = 90, IV = 4.
// const s = "MCMXCIV";

const result = romanToInt(s);
console.log(result);