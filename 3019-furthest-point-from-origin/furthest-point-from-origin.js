/**
 * @param {string} moves
 * @return {number}
 */
var furthestDistanceFromOrigin = function(moves) {

    let l = 0
    let r = 0
    let result = 0

    for(const val of moves){
        if(val == "L"){
            l++
        }else if(val == "R"){
            r++
        }
    }

    if(l>r){
        for(const val of moves){
            if(val == "L"){
                result -= 1
            }else if(val == "R"){
                result += 1
            }else if(val == "_"){
                result -= 1
            }
        }
    }else{
         for(const val of moves){
            if(val == "L"){
                result -= 1
            }else if(val == "R"){
                result += 1
            }else if(val == "_"){
                result += 1
            }
        }
    }

    return Math.abs(result)
};