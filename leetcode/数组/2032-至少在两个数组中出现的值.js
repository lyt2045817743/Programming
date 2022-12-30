var twoOutOfThree = function(nums1, nums2, nums3) {
  nums1 = [...new Set(nums1)];
  nums2 = [...new Set(nums2)];
  nums3 = [...new Set(nums3)];
  const numsArr = [nums1, nums2, nums3];
  const maxLength = Math.max(nums1.length, nums2.length, nums3.length);
  const countMap = {};
  const result = [];

  for(let i = 0; i < maxLength; i++) {
    for(let numsItemIdx = 0; numsItemIdx < 3; numsItemIdx++) {
      const numItem = numsArr[numsItemIdx][i];
      if (numItem) {
        if(countMap[numItem]) {
          countMap[numItem]++;
          if(countMap[numItem] === 2) {
            result.push(numItem);
          }
        } else {
          countMap[numItem] = 1;
        }
      }
    }
  }
  return result;
};

// const result = twoOutOfThree([1,1,3,2], [2, 3], [3]); // [3, 2]
// const result = twoOutOfThree([3, 1], [2, 3], [1, 2]); // [2, 3, 1]
const result = twoOutOfThree([1, 2, 2], [4, 3, 3], [5]); // []
console.log(result);