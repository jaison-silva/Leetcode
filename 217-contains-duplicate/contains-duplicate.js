/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let blah = new Set()

    for(const val of nums){
        if(blah.has(val)){
            return true
        }else{
            blah.add(val)
        }
    }

    return false
};