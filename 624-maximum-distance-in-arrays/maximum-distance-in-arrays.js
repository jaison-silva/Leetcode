/**
 * @param {number[][]} arrays
 * @return {number}
 */
var maxDistance = function(arrays) {
    let minVal = arrays[0][0]
    let maxVal = arrays[0][arrays[0].length-1]
    let result = 0
    
    for(let i=1; i<arrays.length; i++){
        let first = arrays[i][0]
        let last = arrays[i][arrays[i].length-1]

        result = result > (maxVal - first) ? result : (maxVal - first)
        result = result > (last-minVal) ? result : (last-minVal)

        minVal = Math.min(minVal, first);
        maxVal = Math.max(maxVal, last);
    }

    return result
};