/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
        function leetcode(n,seen= new Set()){

        if(n==1) {
            return true
        }else if(seen.has(n)){
                return false
        }
        seen.add(n)

        let arr = n.toString().split("")
        console.log(arr)

        let output = arr.reduce((acc,val)=>{
            return acc + Math.pow(parseInt(val),2)
        },0)

        console.log("this is the ouptyu",output)

        return leetcode(output,seen)
    }

    return leetcode(n)
};