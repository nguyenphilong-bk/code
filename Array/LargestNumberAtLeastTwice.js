var dominantIndex = function(nums) {
    let max = nums[0];
    let index = 0;
    for(let i = 1; i < nums.length; i++)
    {
        if(max < nums[i])
        {
            max = nums[i]
            index = i;
        }
    }
    console.log(max)
    console.log(index)
    for(let i = 0; i < nums.length; i++)
        {
            if(i !== index && max / 2 < nums[i])
                return -1;
        }
    return index;
};

console.log(dominantIndex([0,0,0,1]))