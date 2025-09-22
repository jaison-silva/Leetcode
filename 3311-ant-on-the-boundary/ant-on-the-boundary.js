/**
 * @param {number[]} nums
 * @return {number}
 */
var returnToBoundaryCount = function (nums) {

    // nums.map((val)=>{
    //     if(val<0){
    //         curr = curr-val
    //     }else{
    //         curr = curr+val
    //     }

    //     if(val == 0){
    //         returnVal++
    //     }
    // })

    let curr = nums[0]
    let ant = 0

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] < 0) {
            curr = curr - Math.abs(nums[i])
        } else {
            curr = curr + nums[i]
        }

        console.log(curr)
        if (curr == 0) {
            ant++
        }

    }

    return ant
};