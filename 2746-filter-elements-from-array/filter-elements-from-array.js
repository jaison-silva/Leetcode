/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function(arr, fn) {
    const result = arr.filter((val,index)=>{
       return fn(val,index)
    })

    return result
};