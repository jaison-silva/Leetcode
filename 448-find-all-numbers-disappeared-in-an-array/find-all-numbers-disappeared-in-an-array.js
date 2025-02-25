/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function(nums) {
    let n = nums.length

    let mySet = new Set(nums)
    let result = []

    for(let i=1; i<n+1; i++){
        if(!(mySet.has(i))){
            result.push(i)
        }
    }

    return result
};