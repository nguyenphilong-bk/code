class Solution {
    binarySearch(row, num) {
        let left = 0;
        let right = row.length;

        while (left < right) {
            let mid = left + Math.floor((right - left) / 2);
            if (num === row[mid]) return true;
            if (num > row[mid]) left = mid + 1;
            else right = mid - 1;
        }

        return false;
    }

    solve(matrix) {
        const row = matrix.length;
        if (row === 0) return -1;

        const col = matrix[0].length;
        for (const num of matrix[0]) {
            let inside = true;
            for (let i = 1; i < row; i++) {
                if (!this.binarySearch(matrix[i], num)) {
                    inside = false;
                    break;
                }
            }
            if (inside) return num;
        }

        return -1;
    }
}
