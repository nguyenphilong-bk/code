/**
 * @param {string} s
 * @return {number}
 */

// Given a string s consists of some words separated by spaces, return the length of the last word in the string. If the last word does not exist, return 0.

// A word is a maximal substring consisting of non-space characters only.

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
var lengthOfLastWord = function (s) {
    const arr = s.trim().split(' ');
    return arr[arr.length - 1].length;
};

console.log(lengthOfLastWord('a '));
