var reverseList = function (head) {
    if (!head || !head.next) return head;
    const p = reverseList(head.next);
    head.next.next = head;
    head.next = null;
    return p;
};

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

let a = new ListNode(1);
let b = new ListNode(2);
let c = new ListNode(3);
let d = new ListNode(4);
let e = new ListNode(5);
a.next = b;
b.next = c;
c.next = d;
d.next = e;

reverseList(a);
