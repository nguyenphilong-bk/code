/**
 * @param {string} firstWord
 * @param {string} secondWord
 * @param {string} targetWord
 * @return {boolean}
 */
var isSumEqual = function (firstWord, secondWord, targetWord) {
    let first = 0,
        second = 0,
        third = 0;
    let sum1 = 0,
        sum2 = 0,
        sum3 = 0;
    while (
        first < firstWord.length &&
        second < second.length &&
        third < targetWord.length
    ) {
        sum1 += sum1 * 10 + (firstWord.charCodeAt(first++) - 97);
        sum2 += sum2 * 10 + (secondWord.charCodeAt(second++) - 97);
        sum3 += sum3 * 10 + (targetWord.charCodeAt(third++) - 97);
    }
    while (first < firstWord.length) {
        sum1 = sum1 * 10 + (firstWord.charCodeAt(first++) - 97);
    }
    while (second < secondWord.length) {
        sum2 = sum2 * 10 + (secondWord.charCodeAt(second++) - 97);
    }
    while (third < targetWord.length) {
        sum3 = sum3 * 10 + (targetWord.charCodeAt(third++) - 97);
    }
    console.log(sum3);
    return sum3 == sum1 + sum2;
};

console.log(isSumEqual('j', 'j', 'bi'));
('j');
('j');
('bi');
