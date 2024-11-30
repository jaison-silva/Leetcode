/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function(s) {
    let arr = s.split('')
    let vovels = []
    let vovelsIndex = []

    for(let i = 0; i<arr.length; i++){
        if(["a","e","i","o","u","A","E","I","O","U"].includes(arr[i])){
            vovels.push(arr[i])
            vovelsIndex.push(i)
        }
    }

    for(let i = 0; i<vovelsIndex.length; i++){
        arr[vovelsIndex[i]] = vovels.pop()
    }

    return arr.join('')
};