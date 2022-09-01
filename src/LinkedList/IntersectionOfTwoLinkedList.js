/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (!headA || !headB)
        return null;
    let tempA = headA, tempB = headB;
    let countA = 0, countB = 0;
    
    while (tempA)
    {
        countA++;
        tempA = tempA.next;
    }
    while (tempB)
    {
        countB++;
        tempB = tempB.next
    }
    
    let diff = Math.abs(countA - countB);
    if (countA > countB)
    {
        while (diff > 0)
        {
            headA = headA.next;
            diff--;
        }
    }
    else
    {
        while (diff > 0)
        {
            headB = headB.next;
            diff--;
        }
    }
    
    while (headA)
    {
        if (headA === headB)
            return headA
        headA = headA.next;
        headB = headB.next;
    }
    return null;
    
};