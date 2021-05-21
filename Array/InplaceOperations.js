const first = (arr) => {
    let max = arr[arr.length - 1];
    arr[arr.length - 1] = -1;
    for (let i = arr.length - 2; i >= 0; i--)
    {
        let temp = arr[i];
        arr[i] = max;
        max = max > temp ? max : temp;
    }
    return arr;
}

console.log(first([17, 18, 5, 4, 6, 1]));