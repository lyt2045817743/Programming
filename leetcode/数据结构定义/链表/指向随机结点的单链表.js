/**
 * 带有指向随机结点指针的单链表
 */

 // 数据结构定义
 function ComplexListNode(val) {
    this.val = val;
    this.next = null;
    this.random = null; // 复杂链表专有
}

// 根据输入的一个二维数组来创建复杂链表
function createComplexListNode(arr){
    let nodeObj={};// 用于存放随时创建的随机结点，避免二次创建相同结点
    let randomNode=null;

    // 初始化头结点
    let head=new ComplexListNode(arr[0][0]); // 声明头结点并初始化它的值
    if(arr[0][1]){
        randomNode=new ComplexListNode(arr[arr[0][1]][0]); // 声明头结点的随机结点
    }
    head.random=randomNode; // 将头结点连接到随机结点

    // 将头结点和其链接到的随机结点存放到nodeObj中
    nodeObj[arr[arr[0][1]]]=randomNode; // 将随机结点存放到nodeObj中
    nodeObj[0]=head; // 将头结点存放到nodeObj中

    // 开始向链表中添加其他结点
    let previousNode=head;
    for(let i=1;i<arr.length;i++){
        let val=arr[i][0];
        let random=arr[i][1];
        
        let currentNode=new ComplexListNode(val);

        // 如果nodeObj中存在，直接连接到创建好的结点
        // 如果nodeObj中不存在，则新创建并添加到nodeObj中
        if(nodeObj[random]){
            randomNode=nodeObj[random];
        }
        else{
            if(random){
                randomNode=new ComplexListNode(arr[random][0]);
                nodeObj[random]=randomNode;
            }
            else{
                randomNode=null;
            }
        }
        currentNode.random=randomNode; 
        previousNode.next=currentNode;
        previousNode=previousNode.next;
    }
    return head;
}

// 打印复杂链表
ComplexListNode.prototype.printComplexNodeList=function(){

}