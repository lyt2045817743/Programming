const { createListNode } = require('../数据结构定义/链表/单链表')

var reverseList = function(head) {
  if (!head) return null;
  const arr = [head.val];
  while(head.next) {
    arr.push(head.next.val);
    head = head.next;
  }
  console.log(arr);
  const result = {
    val: arr.pop(),
    next: null,
  };
  let point = result;
  while(arr.length) {
    point.next = {
      val: arr.pop(),
      next: null
    };
    point = point.next;
  }
  return result;
};

const node = createListNode([1, 2, 3]);
// console.log(node);
const result = reverseList(node);
console.log(result);