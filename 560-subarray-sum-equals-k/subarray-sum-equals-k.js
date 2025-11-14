/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    // let numOfSubArr = 0
    // for (let i = 0; i < nums.length; i++) {
    //     for (let j = i; j < nums.length; j++) {
    //         let sum = nums.slice(i,j+1).reduce((acc,val)=>acc+val,0)
    //         if(sum == k) numOfSubArr++
    //     }
    // }
    // return numOfSubArr

    let count = 0
    let freq = { 0: 1 }
    let current_sum = 0

    for (let i = 0; i < nums.length; i++) {

        current_sum += nums[i]
        let prefix_sum = current_sum - k

        if (freq[prefix_sum] !== undefined) {
            count += freq[prefix_sum]
        }

        if (freq[current_sum] == undefined) {
            freq[current_sum] = 1
        } else {
            freq[current_sum]++
        }
    }

    return count
};