function findClosestValueInBst(tree, target) {
    // Write your code here.

    const pair = {
        value: tree.value,
        different: Math.abs(target - tree.value),
    };

    while (tree !== ) {
        if (target === tree.value) return target;

        if (tree.value < target) {
            const change = target - tree.value;

            if (change < pair.different) {
                pair.value = tree.value;
                pair.different = change;
            }

            tree = tree.left;
        } else {
            const change = tree.value - target;

            if (change < pair.different) {
                pair.value = tree.value;
                pair.different = change;
            }

            tree = tree.right;
        }
    }

    return pair.value;
}

// This is the class of the input tree. Do not edit.
class BST {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst;
