/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {

    let result = x.toString().split('')
    const INT32_MIN = -Math.pow(2, 31);
    const INT32_MAX = Math.pow(2, 31) - 1;

    if (result[0] === '-') {
        result.shift()
        result.reverse()
        result = '-' + result.join('')
    } else {
        result = result.reverse().join('')
    }

    result = Number(result)

    if (result <= INT32_MIN || result >= INT32_MAX) {
        return 0
    } else return result
};