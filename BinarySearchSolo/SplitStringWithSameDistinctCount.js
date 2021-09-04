class Solution {
    solve(s) {
        const left = Map();
        const right = Map();
        let result = 0;
        left.le
        left[s[0]] = 1;
        for (let i = 1; i < s.length; i++) {
            if (right[s[i]] === undefined) right[s[i]] = 1;
            else right[s[i]]++;
        }
        for (let i = 1; i < s.length; i++) {
            if (left.size === right.size) result++;
            if (left[s[i]] === undefined) left[s[i]] = 1;
            else left[s[i]]++;
            if (right[s[i]] === 1) right.delete(s[i]);
            else right[s[i]]--;
        }
            
        return result;
    }
}
