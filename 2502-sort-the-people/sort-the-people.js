/**
 * @param {string[]} names
 * @param {number[]} heights
 * @return {string[]}
 */
var sortPeople = function(names, heights) {
    return names.map((val,index)=>[val,heights[index]]).sort((a,b)=>b[1]-a[1]).map(([name])=>name)
};
