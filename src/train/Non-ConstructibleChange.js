function nonConstructibleChange(coins) {
    // Write your code here.
    let max = 0;

    coins.sort((a, b) => a - b);

    for (const coin of coins)
    {
        if (coin > max + 1) return max + 1;
        else max = max + coin;
    }

    return 1;
}

const coins = [5, 7, 1, 1, 2, 3, 22];
console.log(nonConstructibleChange(coins));
// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange;
