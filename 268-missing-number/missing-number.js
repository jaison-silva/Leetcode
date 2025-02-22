/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length

    // if(n==1){
    //     if(n==0)
    // }

    let unique = new Set(nums)

    for(let i = 1; i<=n; i++){
        if(!(unique.has(i))){
            return i
        }
    }

    return 0
};