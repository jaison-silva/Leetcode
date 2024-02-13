/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let n = nums.length

    for(let i=0;i<n;i++){
        for(let j=i+1;j<n;j++){
            if(nums[i]==nums[j]){
                for(let k=j;k<n-1;k++){
                    nums[k]=nums[k+1]
                }
                n--
                j--
            }
        }
    }
    return n
};