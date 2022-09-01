// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:
// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]

// Example2:
// Input: nums = [0]
// Output: [0]

const moveZeros = (arr) => {
    let writePtr = 0;
    for (let readPtr = 0; readPtr < arr.length; readPtr++)
    {
        if (arr[readPtr] !== 0)
        {
            arr[writePtr] = arr[readPtr];
            writePtr++;
        }
    }
    for (let i = writePtr + 1; i < arr.length; i++)
        arr[i] = 0;
    return arr;
}

const test = (arr) => {
    [arr[1], arr[2]] = [arr[2], arr[1]];
    return arr;
}

console.log(test([1,2,3]))