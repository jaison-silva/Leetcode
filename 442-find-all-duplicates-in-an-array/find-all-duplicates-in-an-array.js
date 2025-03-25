/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {

    let duplicates = []

    // const seen = new Set()

    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i + 1; j < nums.length; j++) {
    //         if(nums[i]==nums[j]) {
    //             duplicates.push(nums[i])
    //         }
    //     }
    // }

    // for (let val of nums) {
    //     if (seen.has(val)){
    //         duplicates.push(val)
    //     } else {
    //         seen.add(val)
    //     }
    // }

    for(let i = 0; i<nums.length; i++){
        let index = Math.abs(nums[i]) - 1

        if(nums[index]<0){
            duplicates.push(index+1)
        }

        nums[index] = -nums[index]
    }

    return duplicates
};