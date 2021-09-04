const solve = (s, nums) => {
    let result = 0;
    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] === s[i + 1]) {
            if (nums[i] < nums[i + 1]) {
                result += nums[i];
                s[i] = '';
            }
            result += nums[i] < nums[i + 1] ? nums[i] : nums[i + 1];
        }
    }
    return result;
};

console.log(solve('ab', [1, 0]));
