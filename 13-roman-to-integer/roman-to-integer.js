/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    const blah = {
        I: 1,
        V: 5,
        X: 10,
        L: 50,
        C: 100,
        D: 500,
        M: 1000,
    }

    let result = 0

    for (let i = 0; i < s.length; i++) {
        if (blah[s[i]] < blah[s[i + 1]]) {
            result = result + (blah[s[i + 1]] - blah[s[i]])
            i++
        } else {
            result += blah[s[i]]
        }
    }

    return result
};