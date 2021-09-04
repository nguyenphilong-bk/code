class Tree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    solve(root) {
        const queue = [];
        let sum;

        queue.push(root);

        while (queue.length > 0) {
            sum = 0;
            const size = queue.length;

            for (let i = 0; i < size; i++) {
                const temp = queue.shift();
                sum += temp.val;
                if (temp.left) queue.push(temp.left);
                if (temp.right) queue.push(temp.right);
            }
        }

        return sum;
    }
}
