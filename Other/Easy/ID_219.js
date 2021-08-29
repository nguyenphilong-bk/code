/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
// Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

var containsNearbyDuplicate = function (nums, k) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        if (i - map.get(nums[i]) <= k) return true;
        map.set(nums[i], i);
    }
    return false;
};

console.log(containsNearbyDuplicate([1, 2, 3, 1], 3));
