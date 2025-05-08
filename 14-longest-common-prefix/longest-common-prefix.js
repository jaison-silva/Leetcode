/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let common = strs[0]

    for (let i = 0; i < strs.length; i++) {
        while(strs[i].indexOf(common) !== 0){
            common = common.slice(0,-1)
            if(common == "") return ""
        }
    }

    return common
};