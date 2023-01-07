/**
 * @param {number[]} nums
 * @param {number} x
 * @return {number}
 */
 var minOperations = function(nums, x) {
   let result = Infinity, addFront = 0, addEnd = 0, frontFlag = true, endFlag = true;
   const frontArr = [0];
   const endArr = [0];
   
  for(let i = 0; i < nums.length; i++) {
    addFront = nums[i] + frontArr[frontArr.length - 1];
    addEnd = nums[nums.length - 1 - i] + endArr[endArr.length - 1];
    if (addFront > x && addEnd > x) {
      break;
    }
    if(nums[i] <= x && addFront <= x && frontFlag) {
      frontArr.push(addFront);
    } else {
      frontFlag = false;
    }
    if(nums[nums.length - 1 - i] <= x && addEnd <= x && endFlag) {
      endArr.push(addEnd);
    } else {
      endFlag = false;
    }
  }

  console.log(frontArr, endArr);

  for(let i = 0; i < frontArr.length; i++) {
    let l = 0, r = endArr.length - 1;
    while(r >= l) {
      const mid = Math.floor((r + l) / 2);
      const add = frontArr[i] + endArr[mid];
      console.log(i, 'i');
      // console.log(l, r, 'l r');
      console.log(mid, 'mid');
      console.log(add, 'add');
      if(add === x && i + mid <= nums.length) {
        result = Math.min(result, i + mid);
        break;
      } else if(add > x) {
        if(r === l) break;
        r = mid;
      } else {
        l = mid + 1;
      }
    }
  }

  return result === Infinity ? -1 : result;

};

// const result = minOperations([1,1,4,2,3], 5); // 2
const result = minOperations([5,6,7,8,9], 4); // -1
// const result = minOperations([3,2,20,1,1,3], 10); // 5
// const result = minOperations([1, 1], 3); // -1
// const result = minOperations([5, 2, 3, 1, 1], 5); // 1

console.log(result);