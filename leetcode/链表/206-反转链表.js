/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}
function ReverseList(pHead)
{
    // write code here
    if(!pHead){return {}};
    let nodeArr=[];
    let curNode = pHead;
    while(curNode){
        nodeArr.push(curNode.val);
        curNode=curNode.next;
    }
    
    let root ={val: nodeArr.pop(), next:null };;
    let frontNode = root;
    while(nodeArr.length){
        let curNode = new ListNode(nodeArr.pop());
        frontNode.next=curNode;
        frontNode = curNode;
    }

    return root;
}

// 1->2->3->4->5->NULL
const root={val:1, next:{ val:2, next:{ val:3, next:{ val:4, next:{ val:5, next:null, } } } } }
const result=ReverseList(root);
console.log(result);
