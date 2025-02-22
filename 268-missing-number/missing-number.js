/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length

    // let unique = new Set(nums)

    for(let i = 1; i<=n; i++){
        if(!(nums.includes(i))){
            return i
        }
    }

    return 0
};