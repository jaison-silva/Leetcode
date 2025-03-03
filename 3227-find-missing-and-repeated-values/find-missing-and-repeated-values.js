/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    let flat = grid.flat()
    flat.sort((a,b)=>a-b)

    let missing = null
    let duplicate = null

    for(let i=0; i<flat.length; i++){
        for(let j=i+1; j<flat.length; j++){
            if(flat[i]==flat[j] && i!==j){
                duplicate = flat[i]
            }
        }
    }

    for(let i = 1; i<=flat.length; i++){
        if(flat.includes(i)){
            // missing = flat[i]
            console.log("included")
        }else{
            console.log('not included')
            missing = i
        }
    }

    console.log(flat)
    console.log("duplicate " + duplicate)
    console.log("missing " + missing)

    let answer = []
    answer.push(duplicate ? duplicate : 0)
    answer.push(missing ? missing : 0)
    return answer
};