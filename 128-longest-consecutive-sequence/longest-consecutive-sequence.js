/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    const arr = [...(new Set(nums.sort((a, b) => a - b)))]
    console.log(arr)

    let leng = 1;
    let temp = 1;
    if(arr.length<1)return 0;

    for (let i = 0; i < arr.length - 1; i++) {
        if (arr[i] + 1 == arr[i + 1]) {
            temp++;
        }
        else {
            temp = 1;
        }
        if (temp > leng) {
            leng = temp;
        }
    }
    return leng;
};