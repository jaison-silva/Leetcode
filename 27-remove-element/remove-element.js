/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let n = nums.length
    let result = []
    for(let i = 0;i<n;i++){
        if(val!==nums[i]){
            result.push(nums[i])
        }
    }
        nums.length = 0
    for(let j=0;j<result.length;j++){
        nums.push(result[j])
    }
    return nums.length
};