const { createListNode } = require('../数据结构定义/链表/单链表')
/**
 * @param {ListNode} head
 * @return {number[]}
 */
var reversePrint = function(head) {
  if(!head) return [];
  const result = [head.val];
  while(head.next) {
    result.push(head.next.val);
    head = head.next;
  }
  return result.reverse();
};

const list = createListNode([1, 3, 2]);
const result = reversePrint(list);
console.log(result);