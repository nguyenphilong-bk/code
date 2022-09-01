/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
    let left = 1;
    let right = n;

    while (left <= right) {
        let middle = left + Math.floor((right - left) / 2);
        const result = guess(middle);
        if (result === 0) return middle;
        if (result === 1) left = middle + 1;
        else right = middle - 1;
    }

    return right;
};
