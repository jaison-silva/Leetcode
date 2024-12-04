/**
 * @param {number[]} gain
 * @return {number}
 */
var largestAltitude = function(gain) {

    let highest = 0

    const sum = gain.reduce((acc,val)=>{

        acc = acc + val

        if(acc >= highest){
            highest = acc
        }
        return acc 
    },0)

    return highest
};