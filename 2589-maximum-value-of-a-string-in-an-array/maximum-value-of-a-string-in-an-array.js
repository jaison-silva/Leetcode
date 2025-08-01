/**
 * @param {string[]} strs
 * @return {number}
 */
var maximumValue = function(strs) {
    let resultArr = [];

    for (const val of strs) {
        // If val contains only digits
        if (/^\d+$/.test(val)) {
            resultArr.push(Number(val));
        } else {
            resultArr.push(val.length);
        }
    }

    return Math.max(...resultArr);
};
