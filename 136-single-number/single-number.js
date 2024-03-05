/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let flag = 0;
    for(let i = 0;i<nums.length;i++){
        flag = 0
        for(let j =0;j<nums.length;j++){
            if(nums[i]==nums[j]){
                flag+=1
            }
        }
        if(flag==1){
            return nums[i];
        }
    }
};

