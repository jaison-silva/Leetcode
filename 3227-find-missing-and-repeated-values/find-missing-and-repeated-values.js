/**
 * @param {number[][]} grid
 * @return {number[]}
 */
var findMissingAndRepeatedValues = function(grid) {
    const n = grid.length
    const size = n*n
    let dup = new Set()
    let a = 0

    for(let row of grid){
        for(let j of row){
            if(dup.has(j)){
                a = j
                break;
            }else{
                dup.add(j)
            }
        }
    }

    const sumOfGrid = (size * (size+1))/2

        // for(let i of grid){
        //     for (let j of i){
        //     }
        // }
       let result = grid.reduce((acc,e)=>{
           return acc + e.reduce((sum,element)=>{
                return sum + element
            },0)
        },0)

    const b = sumOfGrid - result + a

    return [a,b]

};