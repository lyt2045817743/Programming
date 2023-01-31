/**
 * @param {number[][]} grid
 * @return {boolean}
 */
var checkXMatrix = function(grid) {
  const n = grid.length;
  for(let i = 0; i < n; i++) {
    console.log(i, i, '--', i, n - i - 1);
    if (grid[i][i] === 0 || grid[i][n - i - 1] === 0) return false;
    for(let j = 0; j < i; j++) {
      console.log(i, j, '==', j, i);
      if (j !== n - i - 1 && (grid[i][j] !== 0 || grid[j][i] !== 0)) {
        return false;
      }
    }
  }
  return true;
};

// const result = checkXMatrix([[2,0,0,1],[0,3,1,0],[0,5,2,0],[4,0,0,2]]); // true
const result = checkXMatrix([[5,7,0],[0,3,1],[0,5,0]]); // false

console.log(result);