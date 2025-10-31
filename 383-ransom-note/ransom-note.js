/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    for(let i = 0; i<ransomNote.length; i++){
        if(!magazine.includes(ransomNote[i])){
            return false
        }else{
            const index = magazine.indexOf(ransomNote[i])
            magazine = magazine.slice(0,index)+magazine.slice(index+1)
        }
    }
    return true
};