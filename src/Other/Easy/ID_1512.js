// Given an array of integers nums.

// A pair (i,j) is called good if nums[i] == nums[j] and i < j.

// Return the number of good pairs.

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i] <= 100

/**
 * @param {number[]} nums
 * @return {number}
 */
var numIdenticalPairs = function (nums) {
    const hashTable = {};
    let result = 0;
    nums.forEach((num) => {
        if (hashTable[num] === undefined) hashTable[num] = 1;
        else hashTable[num] += 1;
    });
    for (const key in hashTable) {
        if (hashTable[key] == 2) result++;
        else if (hashTable[key] > 2)
            result += (hashTable[key] * (hashTable[key] - 1)) / 2;
    }
    return result;
};

console.log(
    numIdenticalPairs([1, 5, 3, 2, 4, 2, 5, 2, 2, 6, 6, 2, 4, 4, 5, 1, 5])
);
