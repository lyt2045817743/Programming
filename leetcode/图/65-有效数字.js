/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function (s) {
  const graph = {
    0: { sign: 1, ".": 2, dight: 6 },
    1: { ".": 2, dight: 6 },
    2: { dight: 3 },
    3: { dight: 3, e: 4, E: 4 },
    4: { dight: 5, sign: 7 },
    5: { dight: 5 },
    6: { ".": 3, e: 4, E: 4, dight: 6 },
    7: { dight: 5 },
  };
  let position = 0;
  for (c of s.trim()) {
    if (c >= '0' && c <= '9') {
    //   position = graph[position]["dight"];
        c = 'dight';
    } else if (c === "+" || c === "-") {
    //   position = graph[position]["sign"];
        c = 'sign';
    } 
    position = graph[position][c];
    if (!position) {
      return false;
    }
  }
  return position === 3 || position === 5 || position === 6;
};

// test part
const strArr = [
  "0",
  " 0.1 ",
  "abc",
  "1 a",
  "2e10",
  " -90e3    ",
  " 1e",
  "e3",
  " 6e-1",
  " 99e2.5  ",
  "53.5e93",
  " --6 ",
  "-+3",
  "95a54e53",
];
strArr.forEach((item) => {
  console.log(item, isNumber(item));
});
