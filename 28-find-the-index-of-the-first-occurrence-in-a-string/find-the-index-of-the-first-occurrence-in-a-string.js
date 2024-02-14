/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    let local = ''
    for(let i = 0;i<=haystack.length-needle.length;i++){
        local = haystack.slice(i,i+needle.length)
        if(local == needle){
            return i
        }
    }
    return -1
};