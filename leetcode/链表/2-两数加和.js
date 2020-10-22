var addTwoNumbers = function(l1, l2) {
    let p1 = l1;
    let p2 = l2;
    let jinwei = 0;
    let l3 = new ListNode(0);
    let p3 = l3;
    while(p1 || p2 || jinwei){
        if(!p1 && !jinwei) { p3.next = p2; break;}
        if(!p2 && !jinwei) { p3.next = p1; break;}
        let val1 = p1 ? p1.val : 0;
        let val2 = p2 ? p2.val : 0;
        let sum = val1 + val2 + jinwei;
        p3.next = new ListNode(sum % 10);
        jinwei = Math.floor(sum / 10);
        p1 = p1 ? p1.next : null;
        p2 = p2 ? p2.next : null;
        p3 = p3.next;
    } 
    return l3.next;
};