/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    let mid = Math.floor(right / 2);
    console.log(mid);
    if (nums[mid] === target) return mid;
    while (left <= right) {
        if (nums[mid] === target) return mid;
        else if (nums[mid] < target) {
            left = mid + 1;
        } else right = mid - 1;
        mid = left + Math.floor((right - left) / 2);
    }
    return -1;
};

console.log(search([2, 5], 5));
