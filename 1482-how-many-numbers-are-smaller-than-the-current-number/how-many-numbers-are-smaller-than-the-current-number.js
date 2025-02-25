/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
    let result = []
    let obj = {}
    let order = [...nums].sort((a, b) => a - b)

    for (let i = 0; i < order.length; i++) {
        if (obj[order[i]] == null || undefined) {
            obj[order[i]] = i
        }
    }

    for (let j = 0; j < nums.length; j++) {
        result.push(obj[nums[j]])
    }

    return result
};