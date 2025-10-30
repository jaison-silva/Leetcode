/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc,val,index,arr)=>{
        if(index==0){
            acc.push(val)
        }else{
            acc.push(val+acc[index-1])
        }
        return acc
    },[])
};