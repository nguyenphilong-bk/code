// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// 2 <= nums.length <= 104
// -109 <= nums[i] <= 109
// -109 <= target <= 109
// Only one valid answer exists.
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    const map = {};
    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];
        if (map[diff] == undefined) {
            map[nums[i]] = i;
        } else {
            return [map[diff], i];
        }
    }
};
console.log(twoSum([2, 7, 11, 15], 9));
