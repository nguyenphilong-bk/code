// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Constraints:

// 1 <= jewels.length, stones.length <= 50
// jewels and stones consist of only English letters.
// All the characters of jewels are unique.

/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
    let result = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.indexOf(stones[i]) !== -1) result++;
    }
    return result;
};

console.log(numJewelsInStones('aA', 'aAAbbbb'));
