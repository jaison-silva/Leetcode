/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {

    let freqMap = {}

    // for (let val of s) {
    //     if (freqMap[val]) {
    //         freqMap[val]++
    //     } else {
    //         freqMap[val] = 1
    //     }
    // }

    for(let val of s){
        freqMap[val] = (freqMap[val] || 0) + 1
    }

    let result = Object.entries(freqMap).sort((a, b) => b[1] - a[1]).map(([val, freq]) => val.repeat(freq)).join('')

    return result
};