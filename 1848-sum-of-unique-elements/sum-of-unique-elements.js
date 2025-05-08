/**
 * @param {number[]} nums
 * @return {number}
 */
var sumOfUnique = function (nums) {
    let unique = []

    for (let i = 0; i < nums.length; i++) {
        let dup = false
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] == nums[j] && i !== j) {
                dup = true
                break
            }
        }
        if (!dup) {
            unique.push(nums[i])
        }
    }

    return unique.reduce((acc,val)=>acc+val,0)

    // for (let i = 0; i < nums.length; i++) {
    //     let val = nums.pop()
    //     if (!nums.includes(val)) {
    //         unique.push(val)
    //     }
    // }



    console.log(unique)

};