var CQueue = function() {
  this.value = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
  this.value.push(value);
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
  if(!this.value.length) return -1;
  return this.value.shift();
};

/**
 * Your CQueue object will be instantiated and called as such:
 * var obj = new CQueue()
 * obj.appendTail(value)
 * var param_2 = obj.deleteHead()
 */

var obj = new CQueue();
const res1 = obj.deleteHead();
obj.appendTail(5);
obj.appendTail(2);
const res2 = obj.deleteHead();
const res3 = obj.deleteHead();
console.log(res1, res2, res3);