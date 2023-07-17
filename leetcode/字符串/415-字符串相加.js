var addStrings = (num1, num2) => {
  let right1 = num1.length - 1, right2 = num2.length - 1, position = 0, result = '', tempSum;

  while(right1 >= 0 || right2 >= 0 || position) {
    tempSum = +(num1[right1] ?? 0) + +(num2[right2] ?? 0) + position;
    position = tempSum >= 10 ? 1 : 0;
    result = tempSum % 10 + result;
    right1--;
    right2--;
  }

  return result;
}

// const result = addStrings('53', '51');
// const result = addStrings('456', '77');
const result = addStrings('237', '284');
const num1 = "401716832807512840963";
const num2 = "167141802233061013023557397451289113296441069"
// const result = addStrings(num1, num2);
console.log(result);