// Given an array of integers nums, sort the array in ascending order.
// Constraints:

// 1 <= nums.length <= 5 * 104
// -5 * 104 <= nums[i] <= 5 * 104

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// TODO Top-Down approach

const sortArray = (nums) => {
    if (nums.length <= 1) return nums;

    let mid = Math.floor(nums.length / 2);
    let leftArray = sortArray(nums.slice(0, mid));
    let rightArray = sortArray(nums.slice(mid));
    return mergeSort(leftArray, rightArray);
};

const mergeSort = (leftArray, rightArray) => {
    let result = [];
    let leftPtr = 0,
        rightPtr = 0;
    while (leftPtr < leftArray.length && rightPtr < rightArray.length) {
        if (leftArray[leftPtr] < rightArray[rightPtr])
            result.push(leftArray[leftPtr++]);
        else result.push(rightArray[rightPtr++]);
    }
    while (leftPtr < leftArray.length) result.push(leftArray[leftPtr++]);
    while (rightPtr < rightArray.length) result.push(rightArray[rightPtr++]);
    return result;
};

console.log(sortArray([5, 7, 3, 9, 2, 1]));

