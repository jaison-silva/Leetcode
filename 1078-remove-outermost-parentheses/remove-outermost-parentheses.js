/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
    let depth = 0
    let result = ""

    for (let i = 0; i < s.length - 1; i++) {
        if (s[i] == "(") {
            if (depth > 0) {
                result += s[i]
            }
            depth++
        } else if (s[i] == ")") {
            depth--
            if (depth > 0) {
                result += s[i]
            }
        }
    }
    return result
};