/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {

    for(let i = 0; i<nums.length; i++){
        let left = nums.slice(0,i).reduce((acc,val)=>acc + val,0)
        let right = nums.slice(i+1).reduce((acc,val)=>acc + val,0)
        if(left ==  right) return i
    }

    return -1
};