// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.

// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.

// Constraints:

// m == accounts.length
// n == accounts[i].length
// 1 <= m, n <= 50
// 1 <= accounts[i][j] <= 100

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function (accounts) {
    let result = 0;
    for (let i = 0; i < accounts.length; i++) {
        let temp = accounts[i].reduce((x, y) => x + y);
        if (temp > result) result = temp;
    }
    return result;
};
console.log(
    maximumWealth([
        [1, 5],
        [7, 3],
        [3, 5],
    ])
);
