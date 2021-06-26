/**
 * @param {string} s
 * @return {number}
 */
// Given a roman numeral, convert it to an integer.
// Constraints:

// 1 <= s.length <= 15
// s contains only the characters ('I', 'V', 'X', 'L', 'C', 'D', 'M').
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

var romanToInt = function (s) {
    const hashTable = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    };
    const lastIndex = s.length - 1;
    let result = hashTable[s[lastIndex]];
    for (let i = lastIndex; i >= 1; i--) {
        if (hashTable[s[i - 1]] >= hashTable[s[i]])
            result += hashTable[s[i - 1]];
        else result -= hashTable[s[i - 1]];
    }

    return result;
};

