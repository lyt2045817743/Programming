var sumZero = function(n) {
  const resultArr = [];
  let addResult = 0;
  let i = 0;
  function getDiffNum(oldRand) {
    let newRand = Math.floor(Math.random(0, 1) * n * 2) - n;
    while(newRand === oldRand || resultArr.includes(newRand)) {
      newRand = Math.floor(Math.random(0, 1) * n * 2) - n;
    }
    console.log(newRand, 'newRand');
    return newRand;
  }
  while(i < n) {
    const rand = i === n - 1 ? (addResult === 0 ? 0 : addResult * -1) : Math.floor(Math.random(0, 1) * n * 2) - n;
    const sameIdx = resultArr.indexOf(rand);
    if (sameIdx === -1) {
      resultArr.push(rand);
      addResult += rand;
      console.log(i, resultArr, addResult, 'not found');
      i++;
    } else {
      resultArr[sameIdx] = getDiffNum(rand);
      addResult = addResult - rand + resultArr[sameIdx];
      console.log(i, resultArr, addResult, 'found');
    }
  }
  return resultArr;
};

const result = sumZero(5);
// const result = sumZero(1);
// const result = sumZero(3);
console.log(result);