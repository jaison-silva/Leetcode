/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @return {number[]}
 */
var relativeSortArray = function (arr1, arr2) {
    let tracker = 0

    for (let i = 0; i < arr2.length; i++) {
        for (let j = 0; j < arr1.length; j++) {
            if (arr2[i] == arr1[j]){
                [arr1[tracker],arr1[j]]=[arr1[j],arr1[tracker]]
                tracker++
            }
        }

    }

    const tempArr = arr1.slice(tracker,arr1.length).sort((a,b)=>a-b)

    for(let i = tracker; i<arr1.length; i++){
        arr1[i] = tempArr.shift() 
    }

    return arr1
};