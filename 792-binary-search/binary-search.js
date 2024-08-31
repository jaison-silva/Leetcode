/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let start = 0
    let end = nums.length-1 
    if(end==-1) return -1
    
    
    while(start<=end){
    let pivot = Math.floor((end+start)/2)
    if(target == nums[pivot]) return pivot

    if(target>nums[pivot]){
        start = pivot+1
    }else if(target<nums[pivot]){
        end = pivot-1
    } 
    }

    return -1
};