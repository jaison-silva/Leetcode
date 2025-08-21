/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    const n = nums.length
    let dup = []

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if(i!==j && nums[i]==nums[j]){
                dup[0] =nums[i]
            }
        }
    }

    for(let i = 1; i<=n; i++){
        if(!nums.includes(i)){
            dup.push(i)
        }
    }

    return dup
};