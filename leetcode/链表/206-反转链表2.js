var reverseList = function(head) {
    let p1 = null;
    let p2 = head;
    while(p2){
        let tmp = p2.next;
        p2.next = p1;
        p1 = p2;
        p2 = tmp;
    }
};