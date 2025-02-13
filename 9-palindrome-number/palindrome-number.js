/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    // console.log(x.toString().split().reverse().join())
    const val = x.toString()

    if(val == val.split('').reverse().join('')) {
        return true
    } else {
        return false
    }

    let string = x.toString()
    console.log(string)
};