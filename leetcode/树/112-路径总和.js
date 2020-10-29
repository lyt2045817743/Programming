const { createTree } = require('../数据结构定义/树/二叉树');

var hasPathSum = function(root, sum) {
    if(!root) return false;
    let flag = false;
    const dfs = (node, totel) => {
        // console.log(node.val,totels);
        if(!node.left && !node.right && totel === sum) flag = true;
        if(node.left) dfs(node.left, totel + node.left.val);
        if(node.right) dfs(node.right, totel + node.right.val);
    };
    dfs(root, root.val);
    return flag;
};

const result = hasPathSum(createTree([5,4,8,11,null,13,4,7,2,null,null,null,1]),22);
console.log(result);
