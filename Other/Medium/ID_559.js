/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root, max = 0) {
    if (!root) return 0;

    for (const child of root.children) {
        max = maxDepth(child, max);
    }

    return max + 1;
};
