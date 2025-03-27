/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array}
 */
var chunk = function(arr, size) {
    const result = []
    let subArr = []

     for (let j = 0; j < arr.length; j++) {
            if(subArr.length < size){
                subArr.push(arr[j])
            }else{
                result.push(subArr)
                subArr = [arr[j]]
            }
        }
        if(subArr.length){
            result.push(subArr)
        }
        return result
};
