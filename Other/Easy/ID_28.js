// Implement strStr().

// Return the index of the first occurrence of needle in haystack, or - 1 if needle is not part of haystack.

// Constraints:

// 0 <= haystack.length, needle.length <= 5 * 104
// haystack and needle consist of only lower-case English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
    if (needle == '') return 0;
    const needleLength = needle.length;
    for (let i = 0; i < haystack.length - needle.length + 1; i++) {
        if (haystack.substr(i, needleLength) === needle) return i;
    }
    return -1;
};

