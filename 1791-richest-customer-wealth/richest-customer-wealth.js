/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
    let richest = -Infinity
     accounts.forEach((val,index,arr)=>{
        richest = Math.max(val.reduce((acc,val)=>acc+val),richest)
    })
    return richest
};