var countPairs = function(nums, low, high) {
  let result = 0;
  for(let i = 0; i < nums.length; i++) {
    for(let j = i + 1; j < nums.length; j++) {
      if( (nums[i] ^ nums[j]) >= low && (nums[i] ^ nums[j]) <= high) {
        console.log(low, nums[i] - nums[j], nums[i] + nums[j], high );
        result++;
      }
    }
  }
  return result;
};

// const result = countPairs([1,4,2,7], 2, 6);
// const result = countPairs([9,8,4,2,1], 5, 14)
const result = countPairs([7881,760,709,2937,1245,720,5187,6361,3793,141,7238], 1492, 3832) // 16
console.log(result);