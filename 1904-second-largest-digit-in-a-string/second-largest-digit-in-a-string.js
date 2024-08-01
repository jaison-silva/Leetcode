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
    
    if(uniqueNumbers.length == 1){
        return -1
    }

    let arr = Array.from(uniqueNumbers)
    arr.sort((a,b)=>a-b)

    const size = arr.length

    if(size<2){
        return -1
    }
    return arr[size-2]
};