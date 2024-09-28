/**
 * @param {number[][]} grid
 * @return {number}
 */
var countNegatives = function (grid) {
    // let count = 0

    // for(let i of grid){
    //     for(let j of i){
    //         if(j<0){
    //             count ++
    //         }
    //     }
    // }
    // return count

    // let count = 0
    // return grid.flat().filter(val => val < 0   ).length
    // return count

    return grid.flat().reduce((acc,val)=>{
        return val<0 ? ++acc : acc
    },0)
};


