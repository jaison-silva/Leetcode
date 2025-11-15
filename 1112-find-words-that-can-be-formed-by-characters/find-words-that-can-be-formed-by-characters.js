/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
    let result = 0
    for (let word of words) {
        // word = word.split('')
        let bucket = chars.split('')
        let state = true
        for (let char of word) {
            if (bucket.includes(char)) {
                bucket[bucket.indexOf(char)] = -1
            } else {
                state = false
            }
        }
        if (state) result += word.length
    }

    return result
};