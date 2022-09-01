const thirdMax = (arr) => {
    arr = Array.from(new Set(arr));
    return arr;
};

console.log(thirdMax([1, 1, 5, 3]));