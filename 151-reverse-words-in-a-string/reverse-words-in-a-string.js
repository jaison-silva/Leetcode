/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    const arr = s.split(/\s+/)

    return arr.reverse().join(" ").trim()
};