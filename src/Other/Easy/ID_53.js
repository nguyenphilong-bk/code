// Given an integer array nums, find the contiguous subarray(containing at least one number) which has the largest sum and return its sum.

// Constraints:

// 1 <= nums.length <= 3 * 104
// -105 <= nums[i] <= 105

// Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if (nums.length === 1) return nums[0];

    const trackingArr = new Array(nums.length);
    let result = nums[0];
    trackingArr[0] = nums[0];

    for (let i = 1; i < nums.length; i++) {
        trackingArr[i] =
            nums[i] + (trackingArr[i - 1] > 0 ? trackingArr[i - 1] : 0);
        result = Math.max(result, trackingArr[i]);
    }
    console.log(trackingArr);
    return result;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
