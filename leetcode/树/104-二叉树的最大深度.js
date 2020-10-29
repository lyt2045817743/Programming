const { createTree } = require('../数据结构定义/树/二叉树');
var maxDepth = function(root) {
    if(!root) return 0;
    let result = 0;
    const dfs = (node, level) => {
        if(!node.left && !node.right && level > result) result = level;
        if(node.left) dfs(node.left, level + 1);
        if(node.right) dfs(node.right, level + 1);
     }
    dfs(root, 1);
    return result;
};

let tree=createTree([1,2,3,4,null,null,5]);
// console.log(tree);

const result=maxDepth(tree);
console.log(result);