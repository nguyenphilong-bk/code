/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (!root) return [];

    let queue = new Array();
    const result = new Array();

    queue.push(root);

    while (queue.length > 0) {
        const size = queue.length;
        const temp = new Array();

        for (let i = 0; i < size; i++) {
            const newNode = queue.shift();
            temp.push(newNode.val);

            if (newNode.children.length > 0)
                queue = queue.concat(newNode.children);
        }

        result.push(temp);
    }

    return result;
};
