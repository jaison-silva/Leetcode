/**
 * @param {number} n
 * @return {number}
 */
var pivotInteger = function (n) {
    // const totalSum = n*(n+1)/2
    let x = -1

    for (let i = n; i > 0; i--) {
        if ((i * (i + 1) / 2) == (n * (n + 1) / 2) - (i * (i - 1) / 2)) x = i
    }

    // console.log(totalSum, sum)
    return x
}; 0