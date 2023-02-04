/**
 * @param {number} n
 * @param {number[][]} trust
 * @return {number}
 */
var findJudge = function(n, trust) {
  if(n === 1 && !trust.length) return 1;
  const beTrustCountArr = [];
  const isTrustOtherArr = [];
  let judges = [];
  for (const [t, beTrust] of trust) {
    // console.log(t, beTrust);
    isTrustOtherArr[t] = true;
    if (beTrustCountArr[beTrust]) {
      beTrustCountArr[beTrust]++;
    } else {
      beTrustCountArr[beTrust] = 1;
    }
    if(beTrustCountArr[beTrust] === n - 1) {
      judges.push(beTrust);
    }
  }
  // console.log(beTrustCountArr, isTrustOtherArr, judges);
  return judges.filter(item => !isTrustOtherArr[item]).length === 1 ? judges[0] : -1;
};

// const result = findJudge(2, [[1,2]]); // 2
// const result = findJudge(3, [[1,3],[2,3]]); // 3
const result = findJudge(3, [[1,3],[2,3],[3,1]]);

console.log(result);