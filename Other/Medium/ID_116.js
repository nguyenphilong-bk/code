// Definition for a Node.
function Node(val, left, right, next) {
    this.val = val === undefined ? null : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
    this.next = next === undefined ? null : next;
}

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (!root) return root;

    const queue = new Array();

    queue.push(root);

    while (queue.length > 0) {
        const size = queue.length;
        for (let i = 0; i < size - 1; i++) {
            const temp = queue.shift();
            temp.next = queue[0];

            if (temp.left) queue.push(temp.left);
            if (temp.right) queue.push(temp.right);
        }

        if (queue[0].left) queue.push(queue[0].left);
        if (queue[0].right) queue.push(queue[0].right);
        queue.shift();
    }

    return root;
};
