/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function(nums) {
    let largest = 0
    let larIndex = 0
    for(let i = 0; i<nums.length;i++){
        if(nums[i]>=largest){
            largest = nums[i]
            larIndex = i
        }
    }

    for(let j = 0;j<nums.length;j++){
        if((largest) < (nums[j]*2) && j!=larIndex){
            return -1 
        }
    }

    return larIndex
};