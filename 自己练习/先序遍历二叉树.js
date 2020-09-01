function preorderTraversal(root){
    var list = [];
  var preOrder = function(root){
    if(root === undefined){
      return root;
    }
    list.push(root.val)
    if(root.left){
        preOrder(root.left);
    }
    if(root.right){
        preOrder(root.right);
    }
  }
  preOrder(root);
  return list;
}

let result=preorderTraversal({val:1,left:null,right:{
    val:2,
    left:{val:3,left:null,right:null},
    right:null,
}})
console.log(result);
