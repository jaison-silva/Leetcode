/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number}
 */
var findKthPositive = function (arr, k) {
    // const limit = Math.max(...arr)

    // let missing = new Set()

    // let i = 0

    // while(i<=10000){
    //     missing.add(i)
    //     i++
    // }

    // for(let i = 0; i<arr.length;i++){
    //     missing.delete(arr[i])
    // }

    // // return missing[k]
    // let result = [...missing]
    // return result[k]

  let missingNum = 0
  let currNum = 1
  let i = 0

  while(missingNum<k){
    if(i>=arr.length || arr[i]!==currNum){
        missingNum++
        if(missingNum === k){
            return currNum
        }
    }else{
        i++
    }
    currNum++
  }

};