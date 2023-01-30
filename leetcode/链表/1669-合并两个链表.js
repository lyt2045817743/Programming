const { createListNode } = require('../数据结构定义/链表/单链表')

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
 var mergeInBetween = function(list1, a, b, list2) {
    let left = null, right = null, isDelBegin = false, cur = list1, count = 0;
    while(cur) {
      if(isDelBegin) {
        if(count === b) {
          right = cur.next;
          break;
        }
      } else {
        if(count === a) {
          isDelBegin = true;
          if(a === b) {
            right = cur.next;
            break;
          }
        } else {
          left = cur;
        }
      }
      cur = cur.next;
      count++;
    }
    
    if(left) {
      left.next = list2;
    } else {
      left = list2;
    }

    cur = left;

    while(cur?.next) {
      cur = cur.next;
    }

    cur.next = right;

    return list1;
};

const list1 = createListNode([0,1,2,3,4,5,6]);
const list2 = createListNode([1000000,1000001,1000002,1000003,1000004]);
const result = mergeInBetween(list1, 2, 5, list2); //[0,1,1000000,1000001,1000002,1000003,1000004,6]

// const list1 = createListNode([0,1,2,3,4,5]);
// const list2 = createListNode([1000000,1000001,1000002]);
// const result = mergeInBetween(list1, 3, 4, list2); // [ 0, 1, 2, 1000000, 1000001, 1000002, 5 ]

// const list1 = createListNode([0,1,2]);
// const list2 = createListNode([1000000,1000001,1000002, 1000003]);
// const result = mergeInBetween(list1, 1, 1, list2); // [ 0, 1000000, 1000001, 1000002, 1000003, 2 ]

result.printListNode();