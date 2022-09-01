class Tree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    solve(root) {
        const stack = [];
        const result = [];

        let curr = root;
        while (stack.length > 0 || curr) {
            if (curr) {
                stack.push(curr);
                curr = curr.left;
            } else {
                let temp = stack.pop();
                result.push(temp);
                curr = temp.right;
            }
        }
        let sum = result[result.length - 1];
        for (let i = result.length - 2; i >= 0; i--) {
            temp = result[i];
            result[i] += sum;
            sum += temp;
        }

        return root;
    }
}
