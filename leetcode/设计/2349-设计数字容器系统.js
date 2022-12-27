var NumberContainers = function() {
  this.indexNumMap = {};
  this.positionsAndMinIndexMap = {};
};

var NumberPositionRecorder = function(index) {
  this.positions = new Set([index]);
  this.minIndex = index;
}

NumberPositionRecorder.prototype.addIndex = function(index) {
  this.positions.add(index);
  if (index < this.minIndex || this.minIndex === -1) {
    this.minIndex = index;
  }
}

NumberPositionRecorder.prototype.deleteIndex = function(index) {
  this.positions.delete(index);
  if (index === this.minIndex) {
    const arr = [...this.positions];
    this.minIndex = arr.length ? Math.min(...arr) : -1;
  } else if (index < this.minIndex || this.minIndex === -1) {
    this.minIndex = index;
  }
}

/** 
 * @param {number} index 
 * @param {number} number
 * @return {void}
 */
NumberContainers.prototype.change = function(index, number) {
  console.log(index,number);
  if (this.indexNumMap[index] === number) return null;
  if (this.indexNumMap[index]) {
    const oldNumber = this.indexNumMap[index];
    this.indexNumMap[index] = number;
    const oldItem = this.positionsAndMinIndexMap[oldNumber];
    oldItem.deleteIndex(index)
  } else {
    this.indexNumMap[index] = number;
  }
  const newItem = this.positionsAndMinIndexMap[number];
  if (newItem) {
    newItem.addIndex(index);
  } else {
    this.positionsAndMinIndexMap[number] = new NumberPositionRecorder(index);
  }
  console.log(this);
  return null;
};

/** 
 * @param {number} number
 * @return {number}
 */
NumberContainers.prototype.find = function(number) {
  console.log('find: ', number);
  return this.positionsAndMinIndexMap[number]?.minIndex ?? -1;
};

var obj = new NumberContainers()
obj.change(1, 10)
obj.change(1, 10)
var param_1 = obj.find(10)
console.log('param_1', param_1);
obj.change(1, 20)
var param_2 = obj.find(10)
console.log('param_2', param_2);
