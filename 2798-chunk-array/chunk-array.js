/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    let result = [];
    for (let i = 0; i < arr.length; i += size) {
        let chunk = arr.slice(i, i + size); 
        result.push(chunk); 
    }
    return result;
};