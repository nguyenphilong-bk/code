/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

const reverseLinkedList = (head) => {
    if (!head || !head.next) return head;
    let next = head.next;
    let prev = null;
    while (head.next) {
        head.next = prev;
        prev = head;
        head = next;
        next = next.next;
    }
    head.next = prev;
    return head;
};

const isPalindrome = (head) => {
    if (!head || !head.next) return true;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let rightPart = reverseLinkedList(slow.next);
    while (rightPart) {
        if (rightPart.val !== head.val) return false;
        rightPart = rightPart.next;
        head = head.next;
    }
    return true;
};

let a = new ListNode(1);
let b = new ListNode(2, a);
let c = new ListNode(3, b);
let d = new ListNode(3, c);
let e = new ListNode(2, d);
let f = new ListNode(1, e);
// console.log(reverseLinkedList(f));
console.log(isPalindrome(f));
