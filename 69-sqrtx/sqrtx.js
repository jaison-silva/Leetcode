/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    let blah = 100
    let guess = 1
    while(blah>0){
        guess = ((guess+x/guess)/2)
        blah--
    }
    return Math.abs(Math.floor(guess))
};