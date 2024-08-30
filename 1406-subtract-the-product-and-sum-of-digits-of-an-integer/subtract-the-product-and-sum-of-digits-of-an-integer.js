/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
    let s = n.toString()
    let arr = s.split('')

    let mul = arr.reduce((acc, e) => {
        return acc * e
    })

    let sum = arr.reduce((acc, e) => {
        return acc = acc + Number(e)
    },0)

    return mul-sum
};