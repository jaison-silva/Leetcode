/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function (s) {
    const arr = s.split('')

    let counter = 0
    let returnVal = 0

    // arr.forEach((val, index) => {

    //     if (val == "L") {
    //         counter++
    //     } else {
    //         counter--
    //     }

    //     if (counter == 0) {
    //         returnVal++
    //     }

    // })


    return arr.reduce((acc,val)=>{
        if(val=="L"){
            counter++
        }else{
            counter--
        }

        if(counter==0){
            return ++acc
        }else{
            return acc
        }
    },0)
};