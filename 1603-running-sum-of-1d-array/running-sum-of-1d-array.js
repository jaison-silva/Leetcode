/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    let result = []
    let sum = 0

    for(let i=0; i<nums.length; i++){
        for(let j=0; j<=i; j++){
            sum += nums[j]
        }
        result.push(sum)
        sum = 0
    }

    return result
};