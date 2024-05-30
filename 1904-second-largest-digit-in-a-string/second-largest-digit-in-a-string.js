/**
 * @param {string} s
 * @return {number}
 */
var secondHighest = function(s) {
    let temp = new Set()
    for (let i = 0; i < s.length; i++) {
        // console.log("blah 1")
        if (!(((s[i].charCodeAt(0)) >= 65 && (s[i].charCodeAt(0)) <= 90) || ((s[i].charCodeAt(0)) >= 97 && (s[i].charCodeAt(0)) <= 122))) {
            temp.add(s[i])
        }
    }

    // console.log(temp)
    let size = temp.size
    let arr = [...temp]

    let large = arr[0]
    let s_lar = 0

    for (let i = 0; i < size; i++) {
        // console.log(s[i])
        if (arr[i] > large) {
            // console.log("blah 3")
            large = arr[i]
        }
    }

    for (let i = 0; i < size; i++) {
        // console.log(s[i])
        if (arr[i] > s_lar && arr[i]<large) {
            // console.log("blah 3")
            s_lar = arr[i]
        }
    }

    // console.log("arr size"+size)
    console.log(arr,large,s_lar)

    if (arr.length <= 1) {
        return -1
    }else{
        return s_lar
    }
};