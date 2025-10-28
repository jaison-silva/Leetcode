/**
 * @param {number} n
 * @return {number}
 */
var alternateDigitSum = function (n) {
    let sign = 0

    if ((n.toString().split('').length) % 2 === 0) {
        sign = -1
    } else {
        sign = 1
    }

    function altSign(number, sign) {
        if (number < 10) return number * 1;
        return sign * (number % 10) + altSign(Math.floor(number / 10), -sign);
    }

    return altSign(n, sign);
};
