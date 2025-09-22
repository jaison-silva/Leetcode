/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {

    let curr = 0

    return nums.reduce((acc,val)=>{
        curr += val

        if(curr == 0){
            return ++acc
        }else return acc
    },0)
};