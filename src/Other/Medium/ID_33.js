/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var findIndexOfMin = (nums) => {
    let left = 0;
    let right = nums.length - 1;

    while (left < right) {
        let mid = left + Math.floor((right - left) / 2);
        if (nums[mid] > nums[right]) left = mid + 1;
        else right = mid;
    }

    return left;
};

var search = function (nums, target) {
    const indexOfMin = findIndexOfMin(nums);
    const lastIndex = nums.length - 1;
    let start = target <= nums[lastIndex] ? indexOfMin : 0;
    let end = target > nums[lastIndex] ? indexOfMin - 1 : lastIndex;

    while (start <= end) {
        let mid = start + Math.floor((end - start) / 2);
        if (nums[mid] == target) return mid;
        if (nums[mid] < target) start = mid + 1;
        else end = mid - 1;
    }

    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 3));
