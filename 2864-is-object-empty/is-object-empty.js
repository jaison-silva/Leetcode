/**
 * @param {Object|Array} obj
 * @return {boolean}
 */
var isEmpty = function(obj) {

    if(Array.isArray(obj) && obj.length == 0){
        return true
    }else if(typeof obj == "object" && Object.keys(obj).length == 0){
        return true
    }

    return false
};