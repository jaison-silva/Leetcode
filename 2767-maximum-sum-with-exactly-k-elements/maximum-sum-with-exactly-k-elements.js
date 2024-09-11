/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maximizeSum = function (nums, k) {
    let indexOfLargest = 0
    let score = 0

    for (let i = 0; i < k; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] > nums[indexOfLargest]) {
                indexOfLargest = j
            }
        }
        score += nums[indexOfLargest]
        ++nums[indexOfLargest]
    }
    return score
};