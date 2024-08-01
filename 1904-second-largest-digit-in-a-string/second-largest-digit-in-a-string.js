/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let uniqueNumbers = new Set()

    for(let n of s){
        if(!isNaN(n)){
            uniqueNumbers.add(n)
        }
    }
    
    if(uniqueNumbers.size == 0 || uniqueNumbers.size == 1){
        return -1
    }

    let arr = Array.from(uniqueNumbers)
    arr.sort((a,b)=>a-b)

    const size = arr.length

    return arr[size-2]
};