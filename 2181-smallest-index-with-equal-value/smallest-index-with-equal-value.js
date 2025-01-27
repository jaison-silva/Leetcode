/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function (nums) {
    const arr = nums.map((val, index) => {
        if (index % 10 == val) {
            return index
        } else {
            return null
        }
    }).filter((val) => val !== null);

    if (arr.length == 0) {
        return -1
    } else {
        return arr[0]
    }
};
