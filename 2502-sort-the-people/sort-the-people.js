/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    let obj = {}
    let result = []

    for(let i = 0; i<names.length; i++){
        obj[heights[i]] = names[i]
    }

    heights.sort((a,b)=>b-a)
    console.log(obj)

    for(let j =0; j<names.length; j++){
        result[j] = obj[heights[j]]
    }

    return result
};