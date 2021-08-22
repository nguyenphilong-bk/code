/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function (nums) {
    if (nums.length == 1) return 0;

    let left = 0;
    let right = nums.length - 1;
    let mid = 0;

    while (left < right) {
        mid = Math.floor((right + left) / 2);

        if (nums[mid] > nums[mid + 1]) right = mid;
        else left = mid + 1;
    }

    return left;
};

console.log(findPeakElement([2, 1]));
