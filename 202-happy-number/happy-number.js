/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
    let garbage = []

    while (true) {
        if (garbage.includes(n)) {
            return false
        }
        garbage.push(n)
        n = n.toString().split('').map(Number).reduce((acc, val) => acc + val * val,0)
        if (n == 1) {
            return true
        }
    }
};