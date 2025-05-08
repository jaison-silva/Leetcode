/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let unique = []

    // for (let i = 0; i < nums.length; i++) {
    //     let dup = false
    //     for (let j = 0; j < nums.length; j++) {
    //         if (nums[i] == nums[j] && i !== j) {
    //             dup = true
    //             break
    //         }
    //     }
    //     if (!dup) {
    //         unique.push(nums[i])
    //     }
    // }


    for (let i = 0; i < nums.length; i++) {
        if (nums.indexOf(nums[i]) == nums.lastIndexOf(nums[i])) { 
            unique.push(nums[i])
        }
    }

    console.log(unique)
    return unique.reduce((acc,val)=>acc+val,0)

};