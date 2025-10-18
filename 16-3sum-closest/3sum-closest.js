/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums.sort((a, b) => a - b)

    let closestSum = nums[0] + nums[1] + nums[2]

    for (let i = 0; i < nums.length-2; i++) {
        let left = i + 1
        let right = nums.length - 1

        while (left < right) {
            const sum = nums[left] + nums[right] + nums[i]

                if(sum == target) return sum
            if(Math.abs(closestSum - target)>Math.abs(sum-target)){
                closestSum = sum
            }

            if(sum < target){
                left++
            }else if(sum > target){
                right--
            }

        }
    }

    return closestSum
};