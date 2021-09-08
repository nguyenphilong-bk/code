class Solution {
    solve(nums, k) {
        const hashMap = {};
        const result = [0];

        for (let i = 0; i < k; i++) {
            if (hashMap[nums[i]] === undefined) {
                hashMap[nums[i]] = 1;
                result[0]++;
            } else hashMap[nums[i]]++;
        }

        for (let i = 1; i < nums.length - k + 1; i++) {
            let temp = result[i - 1];

            if (hashMap[nums[i - 1]] === 1) {
                hashMap.delete(nums[i - 1]);
                temp--;
            } else hashMap[nums[i - 1]]--;

            if (hashMap[nums[i + k - 1]] === undefined) {
                hashMap[nums[i + k - 1]] = 1;
                result.push(++temp);
            } else {
                hashMap[nums[i + k - 1]]++;
                result.push(temp);
            }
        }

        return result;
    }
}
