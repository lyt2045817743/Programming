const { createTree } = require('../数据结构定义/树/二叉树')
var sumNumbers = function(root) {
    if(!root) return 0;
    let result = 0;
    const dfs = (node, sumStr) => {
        sumStr += node.val;
        if(!node.left && !node.right) result += Number(sumStr);
        // console.log(node.val, sumStr)
        if(node.left) dfs(node.left, sumStr);
        if(node.right) dfs(node.right, sumStr);
    }
    dfs(root, '');
    return result;
};

const root = createTree([4,9,0,5,1]);
const result = sumNumbers(root);
console.log(result);