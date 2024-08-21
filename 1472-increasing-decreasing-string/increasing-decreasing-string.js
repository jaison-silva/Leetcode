/**
 * @param {string} s
 * @return {string}
 */
var sortString = function(s) {
    let charCount = {};
    for (let char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }
    
    let result = '';
    while (Object.keys(charCount).length > 0) {
        // Ascending order
        let ascendingChars = Object.keys(charCount).sort();
        for (let char of ascendingChars) {
            if (charCount[char] > 0) {
                result += char;
                charCount[char]--;
                if (charCount[char] === 0) {
                    delete charCount[char];
                }
            }
        }
        
        // Descending order
        let descendingChars = Object.keys(charCount).sort().reverse();
        for (let char of descendingChars) {
            if (charCount[char] > 0) {
                result += char;
                charCount[char]--;
                if (charCount[char] === 0) {
                    delete charCount[char];
                }
            }
        }
    }
    
    return result;
};