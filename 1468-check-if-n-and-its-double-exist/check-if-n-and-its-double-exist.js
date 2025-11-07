/**
 * @param {number[]} arr
 * @return {boolean}
 */
var checkIfExist = function (arr) {
    let unique = new Set(arr)

    for (const val of arr) {
        if(val == 0){
            if((arr.filter((x)=>x===0).length)>1) return true 
        }
        else if (unique.has(2 * val)){
            return true
        }
    }
    return false
};