/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    let max_height_at_i = 0
    leftMax = []
    rightMax = []
    let totalWater = 0

    leftMax[0] = height[0]
    for (let i = 1; i < height.length; i++) {
        leftMax[i] = Math.max(height[i], leftMax[i-1])
    }

    rightMax[height.length-1] = height[height.length-1]
    for (let i = height.length - 2; i >= 0; i--) {
        rightMax[i] = Math.max(height[i], rightMax[i+1])
    }

    for (let i = 0; i < height.length; i++) {
        // max_height_at_i = (Math.max(0, Math.min(height[i - 1], height[i + 1])) - height[i])
        max_height_at_i = Math.max(0, Math.min(leftMax[i], rightMax[i])) - height[i]

        console.log(max_height_at_i)
        totalWater += max_height_at_i
    }

    return totalWater
};