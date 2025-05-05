/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function(arr) {
    // const length = arr.length

    // for(let i = 0 ; i<length; i++){
    //     if(arr[i]==0){
    //         arr.splice(i,0,0)
    //         i++
    //     }
    // }

    // console.log("arr  "+arr)
    // arr.splice(length) 

    for(let i=0;i<arr.length-1;i++){
        if(arr[i]==0) {
            for(let j=arr.length-1;j>=i+1;j--){
                arr[j] = arr[j-1];
            }
            arr[i+1] = 0;
            i++;
        }
    }
};

