/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function(nums) {

    function mergeSort(nums){
    if(nums.length <=1) return nums

        let mid = Math.floor(nums.length/2)
        let left = mergeSort(nums.slice(0,mid))  
        let right = mergeSort(nums.slice(mid))

        return merge(left,right)
    }

    function merge(left,right){
        let result = []
        let i = 0
        let j = 0

        while(i<left.length && j<right.length){ 
            if(left[i]<right[j]){
                result.push(left[i++])
            }else{
                result.push(right[j++])
            }
        }

        return [...result,...left.slice(i),...right.slice(j)]
    }

    return mergeSort(nums)
};