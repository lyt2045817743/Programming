var maximumValue = function(strs) {
  let max = 0;
  for(const item of strs) {
      const curNum = Number.isInteger(Number(item)) ? Number(item) : item.length;
      max = curNum > max ? curNum : max;
  }
  return max;
};

// const result = maximumValue(["alic3","bob","3","4","00000"]); // 5
const result = maximumValue(["1","01","001","0001"]);
console.log(result);