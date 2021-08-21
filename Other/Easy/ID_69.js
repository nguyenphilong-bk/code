/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    if (x === 0 || x === 1) return x;
    let left = 0;
    let right = x;

    while (left <= right) {
        const middle = left + Math.floor((right - left) / 2);
        const temp = middle ** 2;

        if (temp === x) return middle;
        if (temp > x) right = middle - 1;
        else left = middle + 1;
    }

    return right;
};
console.log(mySqrt(8));
