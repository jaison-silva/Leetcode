/**
 * @param {number} n
 * @return {Function} counter
 */
var createCounter = function(n) {
    let g = -1;
    return function() {
        g++
        return n+g
    };
};

/** 
 * const counter = createCounter(10)
 * counter() // 10
 * counter() // 11
 * counter() // 12
 */