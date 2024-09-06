/**
 * @param {number} n
 * @return {number}
 */
var sumOfMultiples = function(n) {
    let accumulator = 0

    for(let i =1; i<=n; i++){
        if(i%3==0 ||i%5==0 ||i%7==0){
            accumulator+=i
        }
    }

    return accumulator
};