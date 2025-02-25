/**
 * @param {Array} arr
 * @param {number} depth
 * @return {Array}
 */
var flat = function (arr, n) {
            if(n==0) return arr

    let result = []

    function flatter(arr,depth){
    //     if(depth >= n){
    //         depth--
    //         return undefined
    //     } 

        for(const val of arr){
            if(Array.isArray(val) && depth < n){
                flatter(val,depth+1)
            }else{
                result.push(val)
            }
        }
    }

    flatter(arr,0)

    console.log(result)
    return result
}; 