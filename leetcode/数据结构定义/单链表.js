/**
 * 普通单链表
 */

// 数据结构定义
function ListNode(val) {
    this.val = val;
    this.next = null;
    this.random = null; // 复杂链表专有
}

// 根据输入的一个一维数组来创建链表
function createListNode(arr){
    let node=new ListNode(arr[0]);
    let previousNode=node;
    for(let i=1;i<arr.length;i++){
        let currentNode=new ListNode(arr[i]);
        previousNode.next=currentNode;
        previousNode=previousNode.next;
    }
    return node;
}


// 查找某一个结点
ListNode.prototype.searchNode=function(val){
    if(this==null){
        return null;
    }
    let currentNode=this;
    while(currentNode){
        if(currentNode.val==val){
            return currentNode;
        }
        currentNode=currentNode.next;
    }
    return null;// 如果遍历到最后一个结点也没有找到，则返回Null。
}

//打印当前链表
ListNode.prototype.printListNode=function(){
    let nodeArr=[];
    if(this==null){
        nodeArr.push(this.val);
    }
    currentNode=this;
    while(currentNode){
        nodeArr.push(currentNode.val);
        currentNode=currentNode.next;
    }
    console.log(nodeArr);
}