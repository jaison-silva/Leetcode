/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    // let temp
    let i = 0
    // for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[j]!==0){
                 [nums[i], nums[j]] = [nums[j], nums[i]];
                i++
            }
        }
    // }
    return nums
};