/**
 * @param {string[]} words
 * @param {character} separator
 * @return {string[]}
 */
var splitWordsBySeparator = function (words, separator) {
    // return words.map(elem => elem.trim().split(separator))
    const result = []

    words.map(elem => {
        const arr = elem.split(separator)
        arr.forEach(elem => {
            if(elem.length!==0){
            result.push(elem)
            }
        })
    })
    return result
};