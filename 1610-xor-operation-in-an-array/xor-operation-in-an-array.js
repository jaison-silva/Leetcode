/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function(n, start) {
    let arr = []
    for(let i = 0; i<n; i++){
        arr[i] = start + 2 * i
    }

    const result =  arr.reduce((e,acc)=>{
        return e ^ acc
    },0)

    return result
};