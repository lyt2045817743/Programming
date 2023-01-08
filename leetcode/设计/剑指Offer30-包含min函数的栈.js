/**
 * initialize your data structure here.
 */
 var MinStack = function() {
  this.value = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
  this.value.push(x);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
  return this.value.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
  return this.value[this.value.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.min = function() {
  return Math.min(...this.value)
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.min()
 */

 const minStack = new MinStack();
 minStack.push(-2);
 minStack.push(0);
 minStack.push(-3);
 console.log(minStack);
 const res1 = minStack.min();  //  --> 返回 -3.
 minStack.pop();
 const res2 = minStack.top();  //  --> 返回 0
 console.log(minStack);
 const res3 = minStack.min();  // --> 返回 -2
 console.log(res1, res2, res3);