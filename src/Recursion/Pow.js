// -100.0 < x < 100.0
// -231 <= n <= 231-1
// -104 <= x^n <= 104
const myPow = (x, n, memo = {}) => {
    if (n === 0) return 1;
    if (x === 0) return 0;
    if (memo[n]) return memo[n];
    if (n > 0) memo[n] = myPow(x, n - 1, memo) * x;
    else memo[n] = 1 / myPow(x, -n, memo);
    return memo[n];
};

console.log(myPow(2,-2));
