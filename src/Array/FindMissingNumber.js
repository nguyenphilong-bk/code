const findDisappearedNumbers = (arr) => {
     const result = [];
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== -1)
        {
            let index = arr[i] - 1;
            arr[index] = -1;
        }
    }
    for(let i = 0; i < arr.length; i++)
    {
        if(arr[i] !== -1)
            result.push(i + 1); 
    }
    return result;
}
console.log(findDisappearedNumbers([4,3,2,7,8,2,3,1]));