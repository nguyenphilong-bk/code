var heightChecker = function(heights) {
    const sorted = heights.slice();
    heights.sort((a, b) => a - b)
    let count = 0;
    for(let i = 0; i < heights.length; i++)
        {
            if(heights[i] !== sorted[i]) count++;
        }
    return count;
};
console.log(heightChecker([1,1,4,2,1,3]))