class Tree {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

class Solution {
    #MAX = 0;
    sumOfANode(root) {
        const stack = [];
        let sum = 0;
        let curr = root;

        while (stack.length > 0 || curr) {
            if (curr) {
                stack.push(curr);
                sum += curr.val;
                curr = curr.left;
            } else {
                const temp = stack.pop();
                curr = temp.right;
            }
        }

        return sum;
    }
    solve(root) {
        const sum = this.sumOfANode(root);
        const stack = [];
        while (stack.length > 0 || root) {
            if (root) {
                stack.push(curr);
                curr = curr.left;
            } else {
                const temp = stack.pop();
                curr = temp.right;
                const subSum = this.sumOfANode(temp);
                const tempMax = subSum * (sum - subSum);
                if (this.#MAX < tempMax) this.#MAX = tempMax;
            }
        }

        return this.#MAX;
    }
}
