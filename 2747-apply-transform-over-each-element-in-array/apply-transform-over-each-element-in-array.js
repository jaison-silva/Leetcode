/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    let result = []
    arr.forEach((val,index)=>{
        result[index] = fn(val,index)
    })

    console.log(result)
    return result
};