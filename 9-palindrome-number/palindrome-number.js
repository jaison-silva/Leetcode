/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    let nums = ''
    let check = x.toString()
    if(check.length<=1){
        return true
    }else{
        for(let i = check.length-1;i>=0;i--){
        nums += check[i]
    }
    }

    if(nums==check){
        return true
    }else{
        return false
    }
};