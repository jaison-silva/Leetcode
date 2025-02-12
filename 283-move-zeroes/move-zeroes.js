/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let temp
    for(let i=0; i<nums.length; i++){
        for(let j=i; j<nums.length; j++){
            if(nums[j]!==0){
                temp = nums[i]
                nums[i]=nums[j]
                nums[j]=temp
                break
            }
        }
    }
    return nums
};