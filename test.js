class Solution {
    solve(s0, s1) {
        if (s0.length !== s1.length) return false;

        let count = new Map();
        for (let i = 0; i < s0.length; i++) {
            if (count.has(s0[i])) count[s0[i]]++;
            else count[s0[i]] = 1;

            if (count.has(s1[i])) count[s1[i]]--;
            else count[s1[i]] = -1;
        }

        for (let i = 0; i < s0.length; i++) if (count[i] > 0) return false;

        return true;
    }
}
