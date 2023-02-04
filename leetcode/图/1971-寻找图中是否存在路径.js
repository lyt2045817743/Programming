var validPath = function(n, edges, source, destination) {
  const graph = {};
  let flag = false;
  const hasVisited = [];
  const nextVisitQueue = [source];
  for (let i = 0; i < edges.length; i++) {
    addRoute(graph, edges[i][0], edges[i][1]);
    addRoute(graph, edges[i][1], edges[i][0]);
  }

  console.log(graph);
  while(nextVisitQueue.length) {
    const curPoint = nextVisitQueue[0];
    nextVisitQueue.shift();

    if (!graph[curPoint]) return false;
    for (let i = 0; i < graph[curPoint].length; i++) {
      
    }
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
const result = validPath(6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5); // false
console.log(result);