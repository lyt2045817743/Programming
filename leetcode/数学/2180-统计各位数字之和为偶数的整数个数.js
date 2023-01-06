/**
 * @param {number} num
 * @return {number}
 */
 var countEven1 = function(num) {
  let count = 0;
  for(let i = 1; i <= num; i++) {
    if(eval(String(i).split('').join('+')) % 2 === 0){
      count++;
    }
  }
  return count;
};

var countEven = function(num) {
  let count = 0;
  for(let i = 1; i <= num; i++) {
    let x = i;
    let add = 0;
    while(x > 0) {
      add += x % 10;
      x = Math.floor(x / 10);
    }
    if(add % 2 === 0) {
      count ++;
    }
  }
  return count;
};

const result = countEven(4); // 2
// const result = countEven(30); // 14
console.log(result);