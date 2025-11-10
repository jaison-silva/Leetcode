/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
    for (let i = 0; i < arr.length-1; i++) {
        let biggesToRight = -Infinity
        for (let j = i+1; j < arr.length; j++) {
            if(arr[j]>biggesToRight) biggesToRight = arr[j]
        }   
        arr[i] = biggesToRight
    }
    arr[arr.length-1] = -1
    return arr
};