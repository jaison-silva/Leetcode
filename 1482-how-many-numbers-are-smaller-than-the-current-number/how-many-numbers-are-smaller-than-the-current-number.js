/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    let arr = []
    const result = nums.map((e,x)=>{
                arr[x] = 0
        for(let i of nums){
            if(e>i){
                arr[x]++
            }
        }
    })
    return arr
};