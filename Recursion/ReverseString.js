const reverseStringRec = (str, left, right) => {
    if (left >= right) return;
    let temp = str[left];
    str[left] = str[right];
    str[right] = temp;
    reverseStringRec(str, left + 1, right - 1);
};

const reverseString = (str) => {
    reverseStringRec(str, 0, str.length - 1);
};

console.log(reverseString(['H', 'a', 'n', 'n', 'a', 'h']));
