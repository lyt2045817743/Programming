function Tree(val, idx){
    this.val=val;
    this.left=null;
    this.right=null;
    this.idx = idx;
}

// 先序遍历 递归  [3,9,20,null,null,15,7]
// left: Tree {val: 9, left: Tree, right: null}
// right: Tree {val: 20, left: Tree, right: Tree}
// val: 3
Tree.prototype.DLR1=function(){
    let arr=[];
    
    let preOrder=function(_this){
         if(_this===null){
             return _this;
         }
            arr.push(_this.val);
            preOrder(_this.left);
            preOrder(_this.right);
    }
    preOrder(this);

    return arr;
}

// 先序遍历 非递归
Tree.prototype.DLR2=function(){
    let arr=[];
    let stack=[];

    currentNode=this;
    while(currentNode){
        arr.push(currentNode.val);
        stack.push(currentNode);
        if(currentNode.left){
            currentNode=currentNode.left;
        }
        else{
            while(stack.length!==0){
                currentNode=stack.pop().right;
                if(currentNode){
                    break;
                }
            }
        }
    }

    return arr;
}

// 中序遍历 递归
Tree.prototype.LDR1=function(){
    let arr=[];

    let middleOrder=function(_this){
        if(_this===null){
            return _this;
        }
        middleOrder(_this.left);
        arr.push(_this.val);
        middleOrder(_this.right);
    }
    middleOrder(this);

    return arr;
}

// 中序遍历 非递归
Tree.prototype.LDR2=function(){
    let arr=[];
    let stack=[];

    currentNode=this;
    while(currentNode){
        stack.push(currentNode);
        if(currentNode.left){
            currentNode=currentNode.left;
        }
        else{
            while(stack.length!==0){
                currentNode=stack.pop();
                arr.push(currentNode.val);
                currentNode=currentNode.right;
                if(currentNode){
                    break;
                }
            }
        }
    }

    return arr;
}

// 后序遍历 递归
Tree.prototype.LRD1=function(){
    let arr=[];

    let afterOrder=function(_this){
        if(_this===null){
            return _this;
        }
        afterOrder(_this.left);
        afterOrder(_this.right);
        arr.push(_this.val);
    }
    afterOrder(this);

    return arr;
}

// // 后序遍历 非递归
// Tree.prototype.LRD2=function(){
//     let arr=[];
//     let stack=[];
//     // let stack2=[];

//     currentNode=this;
//     while(currentNode){
//         if(currentNode.left){
//             stack.push(currentNode);
//             currentNode=currentNode.left;
//         }
//         else{
//             if(currentNode.right&&currentNode!==stack[stack.length-1]){
//                 stack.push(currentNode);
//                 currentNode=currentNode.right;
//             }
//             else{
//                 arr.push(currentNode);

//             }
//         }
//     }

//     return arr;
// }

// 层序遍历
Tree.prototype.widthOrder=function(){
    let arr=[];
    let queue=[];

    currentNode=this;
    while(currentNode){
        arr.push(currentNode.val);
        if(currentNode.left){
            queue.push(currentNode.left);
        }
        if(currentNode.right){
            queue.push(currentNode.right);
        }
        if(queue.length){
            currentNode=queue.shift();
        }else{
            currentNode=null;
        }
    }
    
    return arr;
}

// 根据传过来的一维数组创建树
exports.createTree = function(arr){
    let treeArr=[];
    let curIdx = 1;
    let root=new Tree(arr.shift(), curIdx);
    treeArr.push(root);
    // [15,7]  [node(20)]

    let currentNode;
    while(arr.length!==0){
        currentNode=treeArr.shift();
        let leftVal=arr.shift();
        let rightVal=arr.shift();
        if(leftVal!==null){
            let left=new Tree(leftVal, ++curIdx);
            currentNode.left=left;
            treeArr.push(left);
            // console.log('left', curIdx, left.val);
        }
        if(rightVal!==null){
            let right=new Tree(rightVal, ++curIdx);
            currentNode.right=right;
            treeArr.push(right);
            // console.log('right', curIdx, right.val);
        }
    }

    return root;
}
