/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var deepestLeavesSum = function (root) {
    queue = [root];
    sumOfLevel = [];

    while (queue.length > 0) {
        const size = queue.length;
        let sum = 0;

        for (let i = 0; i < size; i++) {
            if (queue[0].left) queue.push(queue[0].left);
            if (queue[0].right) queue.push(queue[0].right);

            sum += queue.shift().val;
        }

        sumOfLevel.push(sum);
    }

    return sumOfLevel[sumOfLevel.length - 1];
};

let a = [1, 2, 3];
a.shift();
a.length;
