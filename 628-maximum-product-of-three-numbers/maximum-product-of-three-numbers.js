/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function(nums) {
    // nums.sort((a,b)=>Math.abs(a)-Math.abs(b))
    nums.sort((a,b)=>a-b)
    console.log(nums)

    let arr1 = nums.slice(-3)
    // console.log(arr)

    const arr2 = nums[0]*nums[1]*nums[nums.length-1]

    arr1 = arr1.reduce((acc,val)=> acc*val)

    return arr2 > arr1 ? arr2 : arr1

};