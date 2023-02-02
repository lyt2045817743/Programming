/**
 * @param {number} n
 * @param {number[][]} redEdges
 * @param {number[][]} blueEdges
 * @return {number[]}
 */
var shortestAlternatingPaths = function(n, redEdges, blueEdges) {
  const graphMap = {};
  let result = [0];
  createGraphMap(graphMap, redEdges, 'R');
  createGraphMap(graphMap, blueEdges, 'B');
  console.log(graphMap);

  if(!graphMap['0']) {
    result = result.concat(new Array(n - 1).fill(-1));
  } else {
    for(let i = 1; i < n; i++) {
      // 0 到 i 的最短距离
      let curColor = '';
      let routeLength = Infinity;
      let visitedEdges = [];
      const allRoutes = graphMap['0'].map(item => {
        const [to, color] = item;
        visitedEdges.push('0' + to + color);
        return ['0', item, 1];
      });
      while(allRoutes.length) {
        let [from, [to, color], step] = allRoutes[0];
        // console.log('====================================');
        // console.log(allRoutes);
        visitedEdges.push(from + to + color);
        curColor = color;
        if (to === i) {
          if(i===4) {
             console.log('====target');
          }
          routeLength = Math.min(routeLength, step);
          // visitedEdges = [];
        } else {
          graphMap[to + '']?.forEach(item => {
            const [newTo, color] = item;
            if (item[1] !== curColor && !visitedEdges.includes(to + '' + newTo + color)) {
              allRoutes.push([to + '', item, step + 1]);
              if (i === 4) {
                console.log(visitedEdges, to + '' + newTo + color, allRoutes);
                console.log('====push');
              }
            }
          });
        }
        allRoutes.shift();
      }
      result.push(routeLength === Infinity ? -1 : routeLength);
    }
  }
  return result;
};

function createGraphMap(graphMap, edges, flagStr) {
  for(let i = 0; i < edges.length; i++) {
    const [fromPoint, toPoint] = edges[i];
    if (graphMap[fromPoint]) {
      graphMap[fromPoint].push([toPoint, flagStr]);
    } else {
      graphMap[fromPoint] = [[toPoint, flagStr]]
    }
  }
}

// const result = shortestAlternatingPaths(3, [[0,1],[1,2]], []); // [ 0, 1, -1 ]
// const result = shortestAlternatingPaths(3, [[0,1]], [[2,1]]); // [ 0, 1, -1 ]
// const result = shortestAlternatingPaths(3,[[1,0]], [[2,1]]); // [ 0, -1, -1 ]
// const result = shortestAlternatingPaths(3, [[0,1]], [[1,2]]); // [ 0, 1, 2 ]
// const result = shortestAlternatingPaths(3, [[0,1],[0,2]], [[1,0]]); // [ 0, 1, 1 ]
const result = shortestAlternatingPaths(5, [[0,1],[1,2],[2,3],[3,4]], [[1,2],[2,3],[3,1]]); // [ 0, 1, 2, 3, 7 ]
// const result = shortestAlternatingPaths(5, [[1,4],[0,3]], [[3,1],[3,4]]); // [ 0, 2, -1, 1, 2 ]
// const result = shortestAlternatingPaths(5, [[2,2],[0,1],[0,3],[0,0],[0,4],[2,1],[2,0],[1,4],[3,4]], [[1,3],[0,0],[0,3],[4,2],[1,0]]) // [0,1,2,1,1]

console.log(result);
