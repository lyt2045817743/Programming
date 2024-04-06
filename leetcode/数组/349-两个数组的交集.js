/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    const set1 = new Set(nums1);
    const set2 = new Set(nums2);

    const result = [];
    for (let item of set1) {
        if (set2.has(item)) {
            result.push(item)
        }
    }

    return result;
};

// 示例 1：
// 输入：nums1 = [1,2,2,1], nums2 = [2,2]
// 输出：[2]
const nums1 = [1,2,2,1], nums2 = [2,2];

// 示例 2：
// 输入：nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// 输出：[9,4]
// 解释：[4,9] 也是可通过的
// const nums1 = [4,9,5], nums2 = [9,4,9,8,4];

const result = intersection(nums1, nums2);
console.log(result);