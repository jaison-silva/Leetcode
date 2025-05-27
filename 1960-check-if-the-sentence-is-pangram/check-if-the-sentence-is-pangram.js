/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    const given = sentence.split('')

    let all = 'abcdefghijklmnopqrstuvwxyz'.split('')
    // console.log(given)

    // all.map((val)=>{
    //     if(!(given.includes(val))){
    //         return false
    //     }
    // })

    for(let i = 0; i<all.length; i++){
        if(!given.includes(all[i])){
            return false
        }
    }

    return true
};