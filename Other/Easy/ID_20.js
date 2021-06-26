/**
 * @param {string} s
 * @return {boolean}
 */
// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.
var isValid = function (s) {
    const stack = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === ')') {
            if (stack.length === 0 || stack.pop() != '(') return false;
        } else if (s[i] === ']') {
            if (stack.length === 0 || stack.pop() != '[') return false;
        } else if (s[i] === '}') {
            if (stack.length === 0 || stack.pop() != '{') return false;
        } else stack.push(s[i]);
    }
    if (stack.length === 0) return true;
    return false;
};
s = "(]";
console.log(isValid(s));
