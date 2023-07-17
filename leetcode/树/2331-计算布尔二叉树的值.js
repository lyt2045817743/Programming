const { createTree } = require('../数据结构定义/树/二叉树');

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
 * @return {boolean}
 */
var evaluateTree = function (root) {
  // 非递归
  if (root.val < 2) return Boolean(root.val);
  const compStack = [];
  const nodeStack = [root.right];
  let curNode = root;
  while (nodeStack.length) {
    if (curNode.left.val < 2 && curNode.right.val < 2) {
      compStack.push(Boolean(curNode.left.val * curNode.right.val));
    } else {
      compStack.push(curNode.val);
      if (curNode.left.val < 2) {
        compStack.push(curNode.left.val);
        curNode = curNode.right;
      } else if (curNode.right.val < 2) {
        compStack.push(curNode.right.val);
        curNode = curNode.left;
      } else {
        nodeStack.push(curNode.right);
        curNode = curNode.left;
      }
    }
  }
  console.log(compStack);
};

const tree = createTree([2,1,3,null,null,0,1]);
const result = evaluateTree(tree);
console.log(result);