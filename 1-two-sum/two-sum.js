/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
    let array=[]

var twoSum = function(nums, target) {
    outerloop: for(let i=0;i<nums.length;i++){
       for(let j=0;j<nums.length;j++){
            if(i!==j && nums[i]+nums[j]==target){
                array = []
                array.push(i,j);
                break outerloop
            }else{
                array = []
            }
        }
    }
    return array
};