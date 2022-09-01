const duplicateZeros = (arr) => {
    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] === 0)
            if (i + 2 < arr.length - 1)
                for (j = i + 2; j < arr.length - 1; j++)
                {
                    arr[j] = arr[j - 1];
                    }
    }

    return arr;
};
console.log(duplicateZeros([1, 2, 0, 3, 4, 0, 5]));
