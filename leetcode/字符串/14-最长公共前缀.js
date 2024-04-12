/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length === 1) {
        return strs[0];
    }

    const commonPrefix = function (str1, str2) {
        const length = Math.min(str1.length, str2.length);
        let commonStr = ""
        for (let i = 0; i < length; i++) {
            if (str1[i] === str2[i]) {
                commonStr += str1[i];
            } else {
                return commonStr;
            }
        }
        return commonStr;
    }

    let compareWith = strs[0], j = 1;
    while(j < strs.length) {
        if (!compareWith.length) {
            return "";
        }
        compareWith = commonPrefix(compareWith, strs[j]);
        j++;
    }

    return compareWith;
};

// 方法二：纵向扫描：把字符串数组看成以单个字母为一个元素的二维数组，依次比较所有字符串的第一位、第二位...

// 编写一个函数来查找字符串数组中的最长公共前缀。
// 如果不存在公共前缀，返回空字符串 ""。

// 示例 1：
// 输入：strs = ["flower","flow","flight"]
// 输出："fl"
// const strs = ["flower","flow","flight"]

// 示例 2：
// 输入：strs = ["dog","racecar","car"]
// 输出：""
// 解释：输入不存在公共前缀。
// const strs = ["dog","racecar","car"]

// 实例3
const strs = [""];

const result = longestCommonPrefix(strs);
console.log(result);