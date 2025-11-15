/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    for (let i = n; i > 0; i--) {
        if ((i * (i + 1) / 2) == (n * (n + 1) / 2) - (i * (i - 1) / 2)) return i
    }
    return -1
}; 0