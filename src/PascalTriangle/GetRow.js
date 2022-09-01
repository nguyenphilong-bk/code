var getRow = function (rowIndex) {
    if (rowIndex === 0) return [1];
    if (rowIndex === 1) return [1, 1];
    let lastRow = getRow(rowIndex - 1);
    let result = [1];
    for (let i = 1; i < rowIndex; i++) result[i] = lastRow[i - 1] + lastRow[i];
    result.push(1);
    return result;
};

console.log(getRow(5));
