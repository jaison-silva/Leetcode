/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParityII = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (i % 2 == 0) {
                if (nums[i] % 2 == 0) {
                    break;
                } else if (nums[j] % 2 == 0 && i != j) {
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break;
                }
            } else {
                if (nums[i] % 2 != 0) {
                    break;
                } else if (nums[j] % 2 != 0 && i != j) {
                    let temp = nums[i]
                    nums[i] = nums[j]
                    nums[j] = temp
                    break;
                }
            }
        }
    }

    return nums
};