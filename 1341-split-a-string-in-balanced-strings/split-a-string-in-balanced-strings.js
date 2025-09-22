/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    const arr = s.split('')

    let L = 0
    let R = 0
    let returnVal = 0

    arr.forEach((val, index) => {

        if (val == "L") {
            L++
        } else {
            R++
        }

        if (L == R) {
            returnVal++
        }

    })
    return returnVal
};