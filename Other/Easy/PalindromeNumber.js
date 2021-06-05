// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not.
// Constraints:

// -2^31 <= x <= 2^31 - 1

// Follow up: Could you solve it without converting the integer to a string?

/**
 * @param {number} x
 * @return {boolean}
 */
// // TODO without using toString
// var isPalindrome = function (x) {
//     if (x < 0) return false;
//     let temp = x;
//     let reverse = 0;
//     while (temp > 0) {
//         reverse = reverse * 10 + (temp % 10);
//         temp = Math.floor(temp / 10);
//     }
//     console.log(reverse);
//     return x === reverse;
// };
// TODO too fast @@~
const isPalindrome = (x) => {
    if (x < 0) return false;
    let temp = x.toString();
    let left = 0;
    let right = temp.length - 1;
    while (left < right) {
        if (temp[left] != temp[right]) return false;
        left++;
        right--;
    }
    return true;
};

console.log(isPalindrome(121));
