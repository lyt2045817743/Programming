// 栈 + 迭代
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
 * @return {number}
 */
// 通过率 42/63
 var sumRootToLeaf = function(root) {
  if(!root) return 0;
  if(!root.left && !root.right) return root.val;
  let total = 0;
  let curStr = '';
  let curNode = root;
  const stack = [];
  while(stack.length || curNode) {
    if(!curNode) {
      curNode = stack.pop()?.right;
      curStr = curStr.slice(0, curStr.length - 1); // 方案不行，不能覆盖到所有情况
      continue;
    }
    curStr += curNode.val;
    if(curNode?.left) {
      stack.push(curNode);
      curNode = curNode.left;
      continue;
    }
    if(!curNode.left && !curNode.right) {
      total += parseInt(curStr, 2);
      console.log(curStr);
      const parentNode = stack.pop();
      curStr = curStr.slice(0, parentNode?.left === curNode ? curStr.length - 1 : curStr.length - 2); // 方案不行，不能覆盖到所有情况
      curNode = parentNode?.right;
      continue;
    }
    curNode = curNode.right;
  }
  return total;
};

let tree;
// tree = createTree([1,0,1,0,1,0,1]); // 22
// tree = createTree([1,null,0]); // 2
// tree = createTree([0,1,0,0,null,0,0,null,null,null,1,null,null,null,1]); // 5
tree = createTree([0,0,0,null,1,null,1,0,1,null,null,null,null,1]); // 未通过
console.log(tree);
const result = sumRootToLeaf(tree);
console.log(result);