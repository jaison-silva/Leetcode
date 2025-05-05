/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    const long = arr.length

    for(let i = 0 ; i<long; i++){
        if(arr[i]==0){
            arr.splice(i,0,0)
            i++
        }
    }

    console.log("arr  "+arr)
    // console.log("index  "+index)
    arr.length = long
};