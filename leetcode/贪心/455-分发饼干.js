/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
 var findContentChildren = function(g, s) {
   const sortFun = (a, b) => a - b;
    g = g.sort(sortFun);
    s = s.sort(sortFun);
    console.log(g, s);
    let j = 0;
    let count = 0;

    for(let i = 0; i < g.length; i++) {
      while(j < s.length) {
        if(s[j] >= g[i]) {
          count++;
          j++;
          break;
        } else {
          j++;
        }
      }
    }

    return count;
};

// const count = findContentChildren([1,2,3], [1,1]) // 1
// const count = findContentChildren([1, 2], [1, 2, 3]) // 2
// const count = findContentChildren([1, 2, 3], [3]) // 1
const count = findContentChildren([10, 9, 8, 7], [5, 6, 7, 8]) // 2

console.log(count);