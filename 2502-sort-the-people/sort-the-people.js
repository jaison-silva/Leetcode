/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    const sorted = names.map((val,index)=>[val,heights[index]])

    console.log(sorted)
    return sorted.sort((a,b)=>b[1]-a[1]).map((val)=>val[0])

};