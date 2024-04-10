/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    nums = nums.sort();

    const limit = Math.floor(nums.length / 2);
    let count = 0, currentNum = nums[0], i = 0;
    while(i < nums.length) {
        if (nums[i] === currentNum) {
            count++;
            if (count > limit) {
                return currentNum;
            }
        } else {
            currentNum = nums[i];
            count = 1;
        }
        i++;
    }

    return null;
};

// 记录题解中两个很有意思的方法：
// 方法1. 排序后，中间那个数一定是出现次数大于 n/2 的数，直接根据下标获取即可
// 方法2. 利用栈，遍历数组：栈为空 或 与栈顶元素相同时入栈，不同则出栈，最后剩下的就是答案（有点像抵消的思想，只不过是不同的抵消）

// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

// 示例 1：
// 输入：nums = [3,2,3]
// 输出：3
// const nums = [3,2,3];

// 示例 2：
// 输入：nums = [2,2,1,1,1,2,2]
// 输出：2
// const nums = [2,2,1,1,1,2,2];

const result = majorityElement(nums);
console.log(result);