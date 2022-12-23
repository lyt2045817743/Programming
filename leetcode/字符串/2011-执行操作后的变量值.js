var finalValueAfterOperations = function(operations) {
  let X = 0;
  for(let i = 0; i < operations.length; i++) {
    eval(operations[i]);
  }
  return X;
};

// const arr = ["--X","X++","X++"] // 1
const arr = ["++X","++X","X++"] // 3

const result = finalValueAfterOperations(arr);
console.log(result);