var findCenter = function(edges) {
  if (edges[0].includes(edges[1][0])) {
    return edges[1][0]
  }
  if (edges[0].includes(edges[1][1])) {
    return edges[1][1]
  }
};

// const edges = [[1,2],[2,3],[4,2]]; // 2
const edges = [[1,2],[5,1],[1,3],[1,4]]; // 1

const result = findCenter(edges);
console.log(result);