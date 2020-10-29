const { createTree } = require('../数据结构定义/树/二叉树');

var inorderTraversal = function(root) {
    if(!root) return [];
    const stack = [];
    let p = root;
    const result = [];
    while(p || stack.length){
        while(p){
            stack.push(p);
            p = p.left;
        }
        let curNode = stack.pop();
        if(curNode) result.push(curNode.val);
        if(curNode.right) p = curNode.right;
    }
    return result;
};

const result = inorderTraversal(createTree([1,null,2,3])); //注： 这个数据建树有bug 待修复
console.log(result);