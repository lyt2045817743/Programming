const { createTree } = require('../数据结构定义/树/二叉树')
// 非递归
function inorder(root){
    if(!root) { return; };
    let p = root;
    const stack = [];
    while(stack.length || p){
        while(p){
            stack.push(p);
            p = p.left;
        }
        let curNode = stack.pop();
        console.log(curNode.val);
        p = curNode.right;
    }
}
inorder(createTree([3,9,20,null,null,15,7]));