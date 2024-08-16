/**
 * @param {string} s
 * @return {string}
 */
var reformat = function (s) {
    let number = []
    let alpha = []

    s.split('').forEach(element => isNaN(element) ? alpha.push(element) : number.push(element));

    if (Math.abs(alpha.length - number.length) > 1) {
        return ''
    }

    let result = []
    let i = 0

    let startWithAlpha = alpha.length >= number.length;

    while (i < number.length || i < alpha.length) {
        if (startWithAlpha) {
            if (alpha[i] !== undefined) {
                result.push(alpha[i]);
            }
            if (number[i] !== undefined) {
                result.push(number[i]);
            }
        } else {
            if (number[i] !== undefined) {
                result.push(number[i]);
            }
            if (alpha[i] !== undefined) {
                result.push(alpha[i]);
            }
        }
        i++;
    }

    return result.join('')
};