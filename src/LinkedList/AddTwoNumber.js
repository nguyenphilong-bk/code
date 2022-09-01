/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

// Constraints:

// The number of nodes in each linked list is in the range [1, 100].
// 0 <= Node.val <= 9
// It is guaranteed that the list represents a number that does not have leading zeros.
class ListNode {
    constructor(val, next) {
        this.val = val === undefined ? 0 : val;
        this.next = next === undefined ? null : next;
    }
}
var addTwoNumbers = function (l1, l2) {
    let result = new ListNode();
    let carry = 0;
    let temp = result;
    while (l1 && l2) {
        let newDigit = (l1.val + l2.val + carry) % 10;
        if (l1.val + l2.val + carry > 9) carry = 1;
        else carry = 0;
        temp.next = new ListNode(newDigit);
        temp = temp.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    while (l1) {
        temp.next = new ListNode((l1.val + carry) % 10);
        if (l1.val + carry > 9) carry = 1;
        else carry = 0;
        temp = temp.next;
        l1 = l1.next;
    }
    while (l2) {
        temp.next = new ListNode((l2.val + carry) % 10);
        if (l2.val + carry > 9) carry = 1;
        else carry = 0;
        temp = temp.next;
        l2 = l2.next;
    }
    if (carry === 1) temp.next = new ListNode(1);
    return result.next;
};

let l1 = new ListNode(9);
l1.next = new ListNode(9);
l1.next.next = new ListNode(1);

let l2 = new ListNode(1);
// l2.next = new ListNode(6);
// l2.next.next = new ListNode(4);
// l2.next.next.next = new ListNode(9);
// l2.next.next = new ListNode(4);

let result = addTwoNumbers(l1, l2);
while (result) {
    console.log(result);
    result = result.next;
}
