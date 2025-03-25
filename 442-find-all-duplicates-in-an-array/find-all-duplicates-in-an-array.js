/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    let duplicates = []
    const seen = new Set()

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if(nums[i]==nums[j]) {
    //             duplicates.push(nums[i])
    //         }
    //     }
    // }

    for (let val of nums) {
        if (seen.has(val)){
            duplicates.push(val)
        } else {
            seen.add(val)
        }
    }

    return duplicates
};