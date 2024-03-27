/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let zero = 0
    let count=0
    let len = nums.length

    if(len==1){
        return nums
    }

    for(let i=0;i<len;i++){
        if(nums[i]!==0){
            nums[zero]=nums[i]
            zero++
        }else{
            count++
        }
    }

    nums.length=zero

    for(let z=0;z<count;z++){
        nums.push(0)
    }

    return nums
};