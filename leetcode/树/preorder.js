const { createTree } = require('../数据结构定义/树/二叉树')
// 非递归
function preorder(root){
    if(!root){ return; }
    const stack = [root];
    while(stack.length){
        const curNode = stack.pop();
        console.log(curNode.val);
        if(curNode.right) stack.push(curNode.right);
        if(curNode.left) stack.push(curNode.left);
    }
}

preorder(createTree([3,9,20,null,null,15,7]));