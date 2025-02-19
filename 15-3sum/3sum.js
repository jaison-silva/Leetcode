/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    nums.sort((a, b) => a - b)
    let fixed = 0
    let left = fixed + 1
    let right = nums.length - 1
    let result = []

    while (fixed < nums.length - 2) {
        if (fixed > 0 && nums[fixed] === nums[fixed - 1]) {
            fixed++;
            continue;
        } // Skip duplicates for fixed

        left = fixed + 1
        right = nums.length - 1


        while (left < right) {

            let sum = nums[left] + nums[right] + nums[fixed]

            if (sum == 0) {
                result.push([nums[fixed], nums[left], nums[right]])

                while (left < right && nums[left] == nums[left + 1]) {
                    left++
                }
                while (left < right && nums[right] == nums[right - 1]) {
                    right--
                }

                left++;
                right--;
            } else if (sum < 0) {
                left++
            } else {
                right--
            }
        }
        fixed++
    }

    return result
};