/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    if (!head) return head;
    while (head.val === val) {
        head = head.next;
        if (!head) return head;
    }

    let temp = head;
    while (temp) {
        while (temp.next && temp.next.val === val) temp.next = temp.next.next;
        temp = temp.next;
    }
    return head;
};
