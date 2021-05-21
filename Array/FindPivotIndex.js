const findPivotIndex = arr => {
    let leftSum = 0
    console.log(arr.slice(1))
    let rightSum = arr.slice(1).reduce((a, b) => a + b);
    if (leftSum === rightSum) return 0;
    for (let i = 1; i < arr.length; i++)
    {
        leftSum += arr[i - 1];
        console.log(leftSum)
        rightSum -= arr[i];
        console.log(rightSum)
        if (leftSum === rightSum) return i;
    }
    return -1;
}

console.log(findPivotIndex([2, 1, -1]))

console.log(5 / 2 > 2);