function ListNode(val) {
    this.val = val;
    this.next = null;
}

// @param { ListNode } head
// @return { ListNode }
// Given a linked list, return the node where the cycle begins. If there is no cycle, return null.
var detectCycle = head => {
    if (!head || !head.next)
        return null;
    let slow = head;
    let fast = head;
    while (fast.next && fast.next.next)
    {
        if (fast === slow)
        {
            fast = head;
            while (fast !== slow)
            {
                fast = fast.next;
                slow = slow.next;
            }
            return fast;
        }
        fast = fast.next.next;
        slow = slow.next;
    }
    return null;
}