// 通过率：194 / 294
 var addBinary1 = function(a, b) {
  return Number(parseInt(a, 2) + parseInt(b, 2)).toString(2); // 因为number的长度最大限制，太长的字符串转成数字时通过不了
};

 var addBinary = function(a, b) {
  
};

let result;
// result = addBinary('11', '10');
result = addBinary('1010', '1011');
console.log(result);