const { createListNode } = require('../数据结构定义/链表/单链表');

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 这里没有必要
    if (!list1) {
        return list2;
    }
    if (!list2) {
        return list1;
    }

    // 这里没有必要 新创建两个变量 p1 p2，因为完整的list后面不再需要
    let p1 = list1;
    let p2 = list2;
    let list = { val: 0, next: null };
    let p3 = list;

    while (p1 && p2) {
        if (p1.val > p2.val) {
            p3.next = p2;
            p2 = p2.next;
        } else {
            p3.next = p1;
            p1 = p1.next;
        }
        p3 = p3.next;
    }

    // 最后如果有没有合并完的链表，直接拼接在后面
    p3.next = p1 === null ? p2 : p1;

    return list.next;
};

// 示例 1：
// 输入：l1 = [1,2,4], l2 = [1,3,4]
// 输出：[1,1,2,3,4,4]
const l1 = [1,2,4], l2 = [1,3,4];

// 示例 2：
// 输入：l1 = [], l2 = []
// 输出：[]
// const l1 = [], l2 = [];

// 示例 3：
// 输入：l1 = [], l2 = [0]
// 输出：[0]
// const l1 = [], l2 = [0];

const list1 = createListNode(l1), list2 = createListNode(l2);
// console.log(list1, list2);
const result = mergeTwoLists(list1, list2);
console.log(JSON.stringify(result));