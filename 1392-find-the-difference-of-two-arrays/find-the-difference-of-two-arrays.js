/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) {
    let set1 = new Set()
    let set2 = new Set()

    for(const val of nums1){
        if(!nums2.includes(val)){
            set1.add(val)
        }
    }

    for(const val of nums2){
        if(!nums1.includes(val)){
            set2.add(val)
        }
    }

    return [[...set1],[...set2]]

};