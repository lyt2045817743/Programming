/**
 * 通过率：12 / 23 
 * 当 n 过大时，如4000，会出现运行超时的问题。
 */
var distanceLimitedPathsExist = function (n, edgeList, queries) {
  const graph = createGraph(edgeList);
  const result = [];
  for (let i = 0; i < queries.length; i++) {
    let flag = distanceLimitedPathExist(graph, ...queries[i]);
    result.push(flag);
  }
  return result;
};

var distanceLimitedPathExist = function (graph, start, end, distanceLimit) {
  const hasVisited = [];
  const childRouteStartPoints = [String(start)];
  let flag = false;
  // console.log(start, end, distanceLimit, childRouteStartPoints);

  while(childRouteStartPoints.length && !flag) {
    const currentStart = String(childRouteStartPoints[0]);
    childRouteStartPoints.shift();
    if (graph[currentStart]) {
      // 当前点能到的所有点
      const canGoPoints = Object.keys(graph[currentStart]);
      // console.log('canGoPoints: ', canGoPoints);
      for (let i = 0; i < canGoPoints.length; i++) {
        const curToPoint = String(canGoPoints[i]);
        if (graph[currentStart][curToPoint] < distanceLimit) {
          if (curToPoint === String(end)) {
            return true;
          }
          if(!hasVisited.includes(curToPoint)) {
            childRouteStartPoints.push(curToPoint);
          }
        }
      }
    }
    // console.log( 'currentStart: ', currentStart, 'childRouteStartPoints: ', childRouteStartPoints);
    hasVisited.push(currentStart);
    // console.log('hasVisited: ', hasVisited);
  }

  return flag;
};

var createGraph = function (edgeList) {
  const graph = {};
  for (let i = 0; i < edgeList.length; i++) {
    const current = edgeList[i];
    const key = Math.min(current[0], current[1]);
    const innerKey = Math.max(current[0], current[1]);
    addRoute(graph, key, innerKey, current[2]);
    addRoute(graph, innerKey, key, current[2]);
  }
  // console.log(graph);
  return graph;
};

var addRoute = function (graph, key, innerKey, val) {
  if (!graph[key]) {
    graph[key] = {};
    graph[key][innerKey] = val;
  } else if (!graph[key][innerKey]) {
    graph[key][innerKey] = val;
  } else if (graph[key][innerKey] > val) {
    graph[key][innerKey] = val;
  }
}

// const result = distanceLimitedPathsExist(3, [[0,1,2],[1,2,4],[2,0,8],[1,0,16]], [[0,1,2],[0,2,5]]); // pass
const result = distanceLimitedPathsExist(
  13,
  [
    [9, 1, 53],
    [3, 2, 66],
    [12, 5, 99],
    [9, 7, 26],
    [1, 4, 78],
    [11, 1, 62],
    [3, 10, 50],
    [12, 1, 71],
    [12, 6, 63],
    [1, 10, 63],
    [9, 10, 88],
    [9, 11, 59],
    [1, 4, 37],
    [4, 2, 63],
    [0, 2, 26],
    [6, 12, 98],
    [9, 11, 99],
    [4, 5, 40],
    [2, 8, 25],
    [4, 2, 35],
    [8, 10, 9],
    [11, 9, 25],
    [10, 11, 11],
    [7, 6, 89],
    [2, 4, 99],
    [10, 4, 63],
  ],
  [
    [9, 7, 65],
    [9, 6, 1],
    [4, 5, 34],
    [10, 8, 43],
    [3, 7, 76],
    [4, 2, 15],
    [7, 6, 52],
    [2, 0, 50],
    [7, 6, 62],
    [1, 0, 81],
    [4, 5, 35],
    [0, 11, 86],
    [12, 5, 50],
    [11, 2, 2],
    [9, 5, 6],
    [12, 0, 95],
    [10, 6, 9],
    [9, 4, 73],
    [6, 10, 48],
    [12, 0, 91],
    [9, 10, 58],
    [9, 8, 73],
    [2, 3, 44],
    [7, 11, 83],
    [5, 3, 14],
    [6, 2, 33],
  ]
); // pass
// [
//   true, false, false, true,
//   true, false, false, true,
//   false, true, false, true,
//   false, false, false, true,
//   false, true, false, true,
//   true, true, false, true,
//   false, false,
// ];

console.log(result);

