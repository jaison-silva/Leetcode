/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function(nums) {
    return nums.reduce((acc,val,index,arr)=>{
        if(index==0){
            acc.push(val)
        }else{
            const addition = arr.slice(0,index).reduce((acc,val)=>val+acc)
            acc.push(addition+val)
        }
        return acc
    },[])
};