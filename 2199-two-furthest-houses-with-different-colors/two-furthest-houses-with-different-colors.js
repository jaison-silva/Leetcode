/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let abs = 0

    for (let i = 0; i < colors.length; i++) {
        let max = 0
        for (let j = 0; j < colors.length; j++) {
            if(i!==j && colors[i]!==colors[j])
            max = Math.abs(i-j)
        }
        abs = Math.max(max,abs)
    }

    return abs
};