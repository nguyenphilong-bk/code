// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.

// Constraints:

// 1 <= nums.length <= 104
// -104 <= nums[i] <= 104
// nums contains distinct values sorted in ascending order.
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;

    if (target < nums[left]) return 0;

    if (target > nums[right]) return nums.length;

    while (left < right) {
        let mid = Math.floor((left + right) / 2);

        if (nums[mid] === target) return mid;

        if (target < nums[mid]) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};
let nums = [1, 2, 4, 6, 7],
    target = 3;
console.log(searchInsert(nums, target));
