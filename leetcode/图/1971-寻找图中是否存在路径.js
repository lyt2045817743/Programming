var validPath = function(n, edges, source, destination) {
  const graph = {};
  let flag = false;
  const hasVisited = new Array(n).fill(false);
  let nextVisitPoints = [source];
  for (let i = 0; i < edges.length; i++) {
    addRoute(graph, edges[i][0], edges[i][1]);
    addRoute(graph, edges[i][1], edges[i][0]);
  }
  hasVisited[source] = true;

  while(nextVisitPoints.length) {
    const from = nextVisitPoints[0];
    nextVisitPoints.shift();

    if (from === destination) return true;
    graph[from]?.forEach(point => {
      if(!hasVisited[point]) {
        nextVisitPoints.push(point);
        hasVisited[point] = true;
      }
    })
  }

  return flag;

};

var addRoute = function(graph, start, end) {
  if (graph[start]) {
    graph[start].push(end);
  } else {
    graph[start] = [end];
  }
}

// const result = validPath(3, [[0,1],[1,2],[2,0]], 0, 2); // true
// const result = validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5); // false
const result = validPath(1, [], 0, 0) // true
console.log(result);