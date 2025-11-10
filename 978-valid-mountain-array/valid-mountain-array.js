/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
    if(arr.length<3) return false

    let left = 0
    let leftBiggest = -Infinity
    let right = arr.length-1
    let rightBiggest = -Infinity

    for (let i = 0; i < arr.length; i++) {
    console.log(left,right)
        if (arr[left]> leftBiggest) {
            leftBiggest = arr[left]
            left++
        } 
        if(arr[right]>rightBiggest){
            rightBiggest = arr[right]
            right--
        }
    }

    right+=1
    left-=1
        console.log(left,right)

    if(left==0 || right == arr.length-1) return false

    if(left== right) return true

    return false

};