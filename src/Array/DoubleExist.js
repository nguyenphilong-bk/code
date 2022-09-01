var checkIfExist = function (arr) {
    const hash = {};
    for (let i = 0; i < arr.length; i++) {
        if (hash[arr[i]] != null) return true;
        else {
            hash[2 * arr[i]] = i;
            if (arr[i] % 2 === 0) hash[arr[i] / 2] = i;
        }
    }
    return false;
};

console.log(checkIfExist([3, 1, 6, 11]));
