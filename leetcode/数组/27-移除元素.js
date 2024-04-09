/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    // 方法二：双指针 + 递归（也可以改为while循环非递归）
    let end = nums.length - 1; // 指没有被替换的最后一个元素
    function replaceOneFromEnd(front) {
        if (front > end) {
            return;
        }
        if (nums[front] !== val) {
            replaceOneFromEnd(front + 1);
        } else {
            nums[front] = nums[end];
            nums[end] = 0;
            end--;
            replaceOneFromEnd(front);
        }
    }
    replaceOneFromEnd(0, end);
    return end + 1;
};

// 方法三：左指针（慢指针）从左往右保证每一个元素都是最后剩下的（不为val）的元素，另一个右指针（快指针）一直先后找到不是val的将左指针的换掉，然后左指针后移一位

// // 方法一：splice直接删除对应元素
// var removeElement = function(nums, val) {
//     const length = nums.length;

//     let n = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] === val) {
//             n++;
//             nums.splice(i, 1);
//             i--;
//         }
//     }

//     return length - n;
// };

// 给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，并返回移除后数组的新长度。
// 不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
// 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

// 示例 1：
// 输入：nums = [3,2,2,3], val = 3
// 输出：2, nums = [2,2]
// 解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
// const nums = [3,2,2,3], val = 3;

// 示例 2：
// 输入：nums = [0,1,2,2,3,0,4,2], val = 2
// 输出：5, nums = [0,1,3,0,4]
// 解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。你不需要考虑数组中超出新长度后面的元素。
const nums = [0,1,2,2,3,0,4,2], val = 2;

const results = removeElement(nums, val);
console.log(results, nums);