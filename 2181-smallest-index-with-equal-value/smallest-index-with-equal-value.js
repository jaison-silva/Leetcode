/**
 * @param {number[]} nums
 * @return {number}
 */
var smallestEqual = function(nums) {
    // const arr = nums.filter((val,index)=>{
    //     if((index%10)==val){
    //         console.log(index)
    //         return index
    //     }
    // })

    for(let i =0; i<nums.length; i++){
         if((i%10)==nums[i]){
            return i
         }
    }

    return -1
}