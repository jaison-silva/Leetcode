/**
 * @param {number[]} nums
 * @return {number}
 */
var maxProduct = function (nums) {
    let biggest = 0
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(i!==j){
            biggest = Math.max((nums[i] - 1) * (nums[j] - 1),biggest)
            }
        }
    }
    return biggest
};