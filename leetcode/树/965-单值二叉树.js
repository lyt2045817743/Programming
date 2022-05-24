const { createTree } = require('../数据结构定义/树/二叉树')

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
 var isUnivalTree = function(root) {
  if(!root) return true;

  const val = root.val;
  const leftVal = root?.left?.val ?? null;
  const rightVal = root?.right?.val ?? null;
  if((leftVal !== null && val !== leftVal) || (rightVal !== null && val !== rightVal)) {
    return false;
  }

  return isUnivalTree(root.left) && isUnivalTree(root.right);
};

// 处理输入
let input;
// input = createTree([5,null,5,5,5,null,0,null,5]); // false
// input = createTree([2,2,2,5,2]); // false
input = createTree([1,1,1,1,1,null,1]); // true

console.log(input);
// 调用验证
const result = isUnivalTree(input);
console.log(result);