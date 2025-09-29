/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    let max_quantity = 0

    // for (let i = 0; i < height.length; i++) {
    //     for (let j = height.length - 1; j >= 0; j--) {
    //         max_quantity = Math.max(max_quantity, (Math.min(height[i], height[j]) * (Math.abs(j - i))))
    //     }
    // }

    let left = 0
    let right = height.length - 1
    let counter = 0

    while (true) {

        if (left >= right) {
            return max_quantity
        }

        max_quantity = Math.max(max_quantity,((right - left) * Math.min(height[left], height[right])))

        if (height[left] < height[right]) {
            left++
        } else {
            right--
        }
    }

    return max_quantity
};