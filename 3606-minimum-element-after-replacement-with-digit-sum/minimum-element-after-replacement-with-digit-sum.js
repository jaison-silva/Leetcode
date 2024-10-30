/**
 * @param {number[]} nums
 * @return {number}
 */
var minElement = function(nums) {

    let srtNums = []

    nums.forEach((val)=>{
        // srtNums.push(val.toString().split(''))
        let curr = val.toString().split('').reduce((acc,val)=>{
            return acc + Number(val)
        },0)
        srtNums.push(curr)
    })

    srtNums.sort((a,b)=>a-b)

    return srtNums.shift()
};