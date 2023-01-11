var missingNumber = function(nums) {
  let addResultShouldBe = 0;
  let curAddResult = 0;
  for (let i = 0; i < nums.length; i++) {
    curAddResult += nums[i];
    addResultShouldBe += i + 1;
  }
  return addResultShouldBe - curAddResult;
};

const result = missingNumber([0,1,2,3,4,5,6,7,9]);
console.log(result);