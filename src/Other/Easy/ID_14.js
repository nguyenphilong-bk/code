/**
 * @param {string[]} strs
 * @return {string}
 */
// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lower-case English letters.

var longestCommonPrefix = function (strs) {
    if (strs.length === 1) return strs[0];
    if (strs.length === 0) return '';

    let result = '';

    for (let i = 0; i < strs[0].length; i++) {
        for (let j = 1; j < strs.length; j++) {
            if (strs[j][i] !== strs[0][i]) return result;
        }
        result += strs[0][i];
    }
    return result;
};
strs = ['dog', 'racecar', 'car'];
console.log(longestCommonPrefix(strs));
