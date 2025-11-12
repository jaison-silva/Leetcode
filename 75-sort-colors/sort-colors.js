/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let minIndex = i
        for (let j = i; j < nums.length; j++) {
            if (nums[j] <= nums[minIndex]) {
                minIndex = j
            }
        }
        let temp = nums[i]
        nums[i] = nums[minIndex]
        nums[minIndex] = temp
    }
};