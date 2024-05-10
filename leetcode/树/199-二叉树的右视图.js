/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var rightSideView = function(root) {
    if (!root) return [];
    const stack = [root];
    const result = [];
    while(stack.length) {
        result.push(stack[stack.length - 1].val);
        const length = stack.length;
        for (let i = 0; i < length; i++) {
            const curNode = stack.shift();
            if (curNode.left) {
                stack.push(curNode.left);
            }
            if (curNode.right) {
                stack.push(curNode.right);
            }
        }
    }
    return result;
};

// 给定一个二叉树的 根节点 root，想象自己站在它的右侧，按照从顶部到底部的顺序，返回从右侧所能看到的节点值。

// 示例 1:
// 输入: [1,2,3,null,5,null,4]
// 输出: [1,3,4]
const arr = [1,2,3,null,5,null,4];

// 示例 2:
// 输入: [1,null,3]
// 输出: [1,3]
// const arr = [1,null,3];

// 示例 3:
// 输入: []
// 输出: []
// const arr = [];

// 示例 4：
// 输入：[1, 2, 3, 4, null, 5, null, null, null, null, 6]
// 输出：[]
// const arr = [1, 2, 3, 4, null, 5, null, null, null, null, 6]

const { createTree } = require("../数据结构定义/树/二叉树");

const root = createTree(arr);
console.log(JSON.stringify(root));
const result = rightSideView(root);
console.log(result);