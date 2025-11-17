/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {

    function bubbleDown(i,length = nums.length) {
        let index = i
        // let length = nums.length

        while (true) {
            let largest = index
            let left = index * 2 + 1
            let right = index * 2 + 2

            if (left < length && nums[left] > nums[largest]) {
                largest = left
            }
            if (right < length && nums[right] > nums[largest]) {
                largest = right
            }

            if (largest == index) break; 

            [nums[index], nums[largest]] = [nums[largest], nums[index]]

            index = largest
        }
    }

    for (let i = Math.floor(((nums.length) / 2) - 1); i >= 0; i--) { // build heap
        bubbleDown(i)
    }

    for(let i = nums.length-1; i>0; i--){
        [nums[0], nums[i]] = [nums[i], nums[0]]
        bubbleDown(0,i)
    }

    return nums
};