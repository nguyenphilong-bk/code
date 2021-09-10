class LLNode {
    constructor(val, next = null) {
        this.val = val;
        this.next = next;
    }
}

class Solution {
    solve(node, k) {
        const stack = new Array();
        let curr = node;
        let prev = null;

        while (curr) {
            let count = 0;
            while (curr && count < k) {
                stack.push(curr);
                curr = curr.next;
                count++;
            }

            while (stack.length > 0) {
                if (!prev) {
                    prev = stack.pop();
                    node = prev;
                } else {
                    prev.next = stack.pop();
                    prev = prev.next;
                }
            }
        }

        prev.next = null;

        return node;
    }
}
