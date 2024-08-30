/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let arr = n.toString().split('')

    let mul = arr.reduce((acc, e) => acc * e,1)

    let sum = arr.reduce((acc, e) => acc + Number(e),0)

    return mul-sum
};