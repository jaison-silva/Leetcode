/**
 * @param {string[]} words
 * @return {string[]}
 */
var stringMatching = function(words) {
    let arr = new Set()

    for(let i=0; i<words.length; i++){
        for(let j=0; j<words.length; j++){
            if(i!=j && words[j].includes(words[i])){
                arr.add(words[i])
            }
        }
    }

    return Array.from(arr)
};