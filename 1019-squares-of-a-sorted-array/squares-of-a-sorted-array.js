/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function(nums) {
    const squareArr = []
    for(let i of nums){
        squareArr.push(i*i)
    }

    return squareArr.sort((a,b)=>a-b)
};