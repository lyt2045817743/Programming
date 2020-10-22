// 2、回文链表
var isPalindrome = function(head) {
    let p = head;
    let valArr = [];
    while(p){
        valArr.push(p.val);
        p = p.next;
    }
    let s1 = valArr.join('');
    let s2 = valArr.reverse().join('');
    return s1 === s2;
};