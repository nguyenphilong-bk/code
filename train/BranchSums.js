class BinaryTree {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

function calculateBranchsSum(root, result, sum) {
    if (!root) return;

    const newSum = sum + root.value;

    if (!root.left && !root.right) {
        result.push(newSum);
        return;
    }

    calculateBranchsSum(root.left, result, newSum);
    calculateBranchsSum(root.right, result, newSum);
}

function branchSums(root) {
    const result = new Array();

    calculateBranchsSum(root, result, 0);
    return result;
}
