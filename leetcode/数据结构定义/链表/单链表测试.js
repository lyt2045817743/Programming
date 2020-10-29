const { createListNode } = require('./单链表');
let node=createListNode([1,2,3,4,5]);
node.printListNode();
let findNode=node.searchNode(3);
console.log(findNode);
