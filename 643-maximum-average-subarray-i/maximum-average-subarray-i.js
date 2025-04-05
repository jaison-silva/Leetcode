/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let avg = 0

    for(let i = 0; i<k; i++){
        avg += nums[i]
    }

    let max = avg

    for(let i = k; i<nums.length; i++){
        avg = (avg - (nums[i-k]) + nums[i] )
        max = Math.max(avg,max)
    }

    return max / k
};