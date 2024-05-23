/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {

    let cycle = new Set()
    let arr = n.toString().split('')

    while(true){
        
        let output = arr.reduce((acc,val)=>{
            return acc += val*val
        },0)

        if(output == 1 ){
            return true
        }

        if(cycle.has(output)){
            return false
        }
        cycle.add(output)
        arr = output.toString().split('')
    }

};