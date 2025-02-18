/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    let length = arr.length
    let i = 0
    while(i<arr.length){
        if(arr[i]==0){
            for(let j=length-1; j>i;j--){
                arr[j] = arr[j-1]
            }
            i++
        }
        i++
    }
};