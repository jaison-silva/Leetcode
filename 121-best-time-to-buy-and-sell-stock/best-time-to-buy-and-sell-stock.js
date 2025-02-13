/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let minPrice = Infinity
    let maxProfit = 0

    for(const val of prices){
        minPrice = Math.min(minPrice,val)
        maxProfit = Math.max(maxProfit,val-minPrice)
    }

    return maxProfit
};