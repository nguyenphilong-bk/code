// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
// Constraints:

// -2^31 <= x <= 2^31 - 1

/**
 * @param {number} x
 * @return {number}
 */

// TODO Using builtin is too slow, so in order to get the faster solution, we need to implement another algorithm
// var reverse = function (x) {
//     let result = 0;
//     let reversed = parseInt(
//         Math.abs(x).toString().split('').reverse().join('')
//     );
//     let ceil = Math.pow(2, 31) - 1;
//     if (reversed > ceil) return 0;
//     if (x > 0) return reversed;
//     else return -reversed;
// };

// TODO this algorithm will speed up the process
const reverse = (x) => {
    let tempValue = Math.abs(x);
    let result = 0;
    const max = Math.pow(2, 31) - 1;
    while (tempValue > 0) {
        result = result * 10 + (tempValue % 10);
        tempValue = Math.floor(tempValue / 10);
        if (result > max / 10 && tempValue > 0) return 0;
    }
    if (x > 0) return result;
    return -result;
};

console.log(reverse(123));
